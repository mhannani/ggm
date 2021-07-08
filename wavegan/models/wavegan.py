import os
from .consts import *
from ..utils.audio import *
from .discriminator import Discriminator
from .generator import Generator
from ..utils import *
import torch.optim as optim
import torch
from torch.autograd import grad, Variable
from tqdm import tqdm


class Wavegan(object):
    """
    The wavegan model, with generator and discriminator combined.
    """

    def __init__(self, train_loader, val_loader):
        super(Wavegan, self).__init__()
        self.g_cost = []
        self.train_d_cost = []
        self.train_w_distance = []
        self.valid_g_cost = [-1]
        self.valid_reconstruction = []
        self.discriminator = Discriminator(
            model_size=MODEL_CAPACITY_SIZE,).to(torch.device("cpu"))

        self.discriminator.apply(weights_init)
        self.generator = Generator(
            model_size=MODEL_CAPACITY_SIZE,).to(torch.device("cpu"))

        self.generator.apply(weights_init)
        self.optimizer_g = optim.Adam(
            self.generator.parameters(), lr=LR_G, betas=(ADAM_BETA_1, ADAM_BETA_2)
        )  # Setup Adam optimizers for both G and D

        self.optimizer_d = optim.Adam(
            self.discriminator.parameters(), lr=LR_D, betas=(ADAM_BETA_1, ADAM_BETA_2)
        )

        self.train_loader = train_loader
        self.val_loader = val_loader
        self.n_samples_per_batch = len(train_loader)

    def calculate_discriminator_loss(self, real, generated):
        disc_out_gen = self.discriminator(generated)
        disc_out_real = self.discriminator(real)

        alpha = torch.FloatTensor(BATCH_SIZE, 1, 1).uniform_(0, 1).to(torch.device("cpu"))
        alpha = alpha.expand(BATCH_SIZE, real.size(1), real.size(2))

        interpolated = (1 - alpha) * real.data + (alpha) * generated.data[:BATCH_SIZE]
        interpolated = Variable(interpolated, requires_grad=True)

        # calculate probability of interpolated examples
        prob_interpolated = self.discriminator(interpolated)
        grad_inputs = interpolated
        ones = torch.ones(prob_interpolated.size()).to(torch.device("cpu"))
        gradients = grad(
            outputs=prob_interpolated,
            inputs=grad_inputs,
            grad_outputs=ones,
            create_graph=True,
            retain_graph=True,
            only_inputs=True,
        )[0]

        # calculate gradient penalty
        grad_penalty = (
                P_COEFF
                * ((gradients.view(gradients.size(0), -1).norm(2, dim=1) - 1) ** 2).mean()
        )

        cost_wd = disc_out_gen.mean() - disc_out_real.mean()
        cost = cost_wd + grad_penalty
        return cost, cost_wd

    def apply_zero_grad(self):
        self.generator.zero_grad()
        self.optimizer_g.zero_grad()

        self.discriminator.zero_grad()
        self.optimizer_d.zero_grad()

    def enable_disc_disable_gen(self):
        gradients_status(self.discriminator, True)
        gradients_status(self.generator, False)

    def enable_gen_disable_disc(self):
        gradients_status(self.discriminator, False)
        gradients_status(self.generator, True)

    def disable_all(self):
        gradients_status(self.discriminator, False)
        gradients_status(self.generator, False)

    def train(self):
        progress_bar = tqdm(total=N_ITERATIONS // PROGRESS_BAR_STEP_ITER_SIZE)
        fixed_noise = sample_noise(BATCH_SIZE).to(torch.device("cpu"))
        gan_model_name = "gan_{}.tar".format('wavegan')

        first_iter = 0
        if TAKE_BACKUP and os.path.isfile(gan_model_name):
            checkpoint = torch.load(gan_model_name, map_location="cpu")
            self.generator.load_state_dict(checkpoint["generator"])
            self.discriminator.load_state_dict(checkpoint["discriminator"])
            self.optimizer_d.load_state_dict(checkpoint["optimizer_d"])
            self.optimizer_g.load_state_dict(checkpoint["optimizer_g"])
            self.train_d_cost = checkpoint["train_d_cost"]
            self.train_w_distance = checkpoint["train_w_distance"]
            self.valid_g_cost = checkpoint["valid_g_cost"]
            self.g_cost = checkpoint["g_cost"]

            first_iter = checkpoint["n_iterations"]
            for i in range(0, first_iter, PROGRESS_BAR_STEP_ITER_SIZE):
                progress_bar.update()
            self.generator.eval()
            with torch.no_grad():
                fake = self.generator(fixed_noise).detach().cpu().numpy()
            save_audio(fake, first_iter)

        self.generator.train()
        self.discriminator.train()
        for iter_indx in range(first_iter, N_ITERATIONS):
            self.enable_disc_disable_gen()
            for _ in range(N_CRITIC):
                real_signal = next(self.train_loader)
                noise = sample_noise(BATCH_SIZE)
                generated = self.generator(noise)

                self.apply_zero_grad()
                disc_cost, disc_wd = self.calculate_discriminator_loss(
                    real_signal.data, generated.data
                )

                disc_cost.backward()
                self.optimizer_d.step()

            self.apply_zero_grad()
            self.enable_gen_disable_disc()
            noise = sample_noise(BATCH_SIZE)
            generated = self.generator(noise)
            discriminator_output_fake = self.discriminator(generated)
            generator_cost = -discriminator_output_fake.mean()
            generator_cost.backward()
            self.optimizer_g.step()
            self.disable_all()

            if iter_indx % SAVE_SAMPLES_EVERY == 0:
                with torch.no_grad():
                    interpolate_latent_space(self.generator, n_samples=2)
                    fake = self.generator(fixed_noise).detach().cpu().numpy()
                save_audio(fake, iter_indx)

            if TAKE_BACKUP and iter_indx % BACKUP_EVERY_N_ITERS == 0:
                saving_dict = {
                    "generator": self.generator.state_dict(),
                    "discriminator": self.discriminator.state_dict(),
                    "n_iterations": iter_indx,
                    "optimizer_d": self.optimizer_d.state_dict(),
                    "optimizer_g": self.optimizer_g.state_dict(),
                    "train_d_cost": self.train_d_cost,
                    "train_w_distance": self.train_w_distance,
                    "valid_g_cost": self.valid_g_cost,
                    "g_cost": self.g_cost,
                }
                torch.save(saving_dict, gan_model_name)

        self.generator.eval()

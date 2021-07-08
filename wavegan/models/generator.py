from torch import nn
import torch.functional as f


class Generator(nn.Module):
    """
    The generator model.
    Adapted from: https://github.com/caogang/wgan-gp/blob/ae47a185ed2e938c39cf3eb2f06b32dc1b6a2064/gan_toy.py#L39
    """

    def __init__(
            self,
            model_size=64,
            num_channels=1
    ):
        super(Generator, self).__init__()

        self.model_size = model_size  # d
        self.num_channels = num_channels  # c
        self.latent_dim = 100
        self.dim_mul = 16
        self.up_sample = True,
        self.stride = 4
        self.fc1 = nn.Linear(self.latent_dim, 4 * 4 * model_size * self.dim_mul)

    def _build(self):
        """
        Build the network.
        :return: None
        """






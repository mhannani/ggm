from wavegan import *
# train the model
target_signals_dir = './waves/'

train_loader = WaveLoader(os.path.join(target_signals_dir, "train"))
val_loader = WaveLoader(os.path.join(target_signals_dir, "valid"))


wave_gan = Wavegan(train_loader, val_loader)
wave_gan.train()
visualize_loss(
    wave_gan.g_cost, wave_gan.valid_g_cost, "Train", "Val", "Negative Critic Loss"
)
interpolate_latent_space(wave_gan.generator, n_samples=5)
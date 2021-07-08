import numpy as np
import torch
from .sample_noise import sample_noise
from .visualize import visualize_audio


def interpolate_latent_space(model, n_samples=2):
    """
    Laten space
    :param model: nn.Model instance
    :param n_samples: number of sample to generate.
    :return: None
    """

    # create latent space of size 2*100 .
    z_latent_test = sample_noise(2)

    # calculated interpolated vector
    with torch.no_grad():
        # interpolated samples
        interpolated = []

        # compute the interpolated n_samples vectors
        for alpha in np.linspace(0, 1, n_samples):
            interpolate_vec = alpha * z_latent_test[0] + ((1 - alpha) * z_latent_test[1])

            # add it to the array
            interpolated.append(interpolate_vec)

        # concatenate the interpolated tensors along an axis
        interpolated = torch.stack(interpolated)

        # generate sample from the interpolated vector/tensor.
        generated_audio = model(interpolated)

    # visualize the spectrogram of the new audio generated
    visualize_audio(generated_audio)

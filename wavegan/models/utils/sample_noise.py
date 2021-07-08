import torch


def sample_noise(size):

    # create a latent space with floats as data type of size `(size, 100)` and move the tensor to the CPU.
    z = torch.FloatTensor(size, 100).to(torch.device("cpu"))

    # compute the normal distribution of the latent space
    z.data.normal_()
    return z

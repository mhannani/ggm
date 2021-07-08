import torch
from torch import nn
import torch.nn.functional as f
from ..layers import ConvTranspose1d


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

        # build the model
        self._build()

    def _build(self):
        """
        Build the network.
        :return: None
        """
        num_channels = self.num_channels
        model_size = self.model_size
        dim_mul = self.dim_mul
        input_channels_iter = [(model_size * dim_mul // i) for i in [1, 2, 4, 8, 16]]
        output_channels_iter = [(model_size * dim_mul // i) for i in [2, 4, 8, 16, 1]]

        deconvolution_layers = [
            ConvTranspose1d(
                i,
                j,
                25,
                stride=4,
            ) for i, j in zip(input_channels_iter, output_channels_iter)
        ]

        self.deconvolution_layers_list = nn.ModuleList(deconvolution_layers)

    def forward(self, x):
        x = self.fc1(x).view(-1, self.dim_mul * self.model_size, 16)
        x = f.relu(x)

        for deconv_layer in self.deconvolution_layers_list[:-1]:
            x = f.relu(deconv_layer(x))

        output = torch.tanh(self.deconvolution_layers_list[-1](x))
        return output






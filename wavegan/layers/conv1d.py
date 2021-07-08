from .phase_shuffle import PhaseShuffle
from torch import nn
import torch.nn.functional as f


class Conv1dLeakyReluPhaseShuffle(nn.Module):
    def __init__(
        self,
        input_channels,
        output_channels,
        kernel_size,
        stride=4,
        alpha=0.2,
        shift_factor=2,
        padding=11,
    ):

        super(Conv1dLeakyReluPhaseShuffle, self).__init__()
        self.conv1d = nn.Conv1d(
            input_channels, output_channels, kernel_size, stride=stride, padding=padding
        )
        self.phase_shuffle = PhaseShuffle(shift_factor)
        self.alpha = alpha
        self.use_phase_shuffle = shift_factor == 0

    def forward(self, x):
        x = self.conv1d(x)
        x = f.leaky_relu(x, negative_slope=self.alpha)
        if self.use_phase_shuffle:
            x = self.phase_shuffle(x)
        return x

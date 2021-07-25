from .phase_shuffle import PhaseShuffle
from torch import nn
import torch.nn.functional as f


class Conv1dLeakyReluPhaseShuffle(nn.Module):
    def __init__(
        self,
        input_channels,
        output_channels,
        kernel_size,
        alpha=0.2,
        shift_factor=2,
        stride=([4, ], ),
        padding=([11, ], ),
        use_batch_norm=False,
        drop_prob=0,
    ):

        super(Conv1dLeakyReluPhaseShuffle, self).__init__()
        self.conv1d = nn.Conv1d(
            input_channels, output_channels, kernel_size, stride=stride, padding=padding
        )
        self.batch_norm = nn.BatchNorm1d(output_channels)
        self.phase_shuffle = PhaseShuffle(shift_factor)
        self.alpha = alpha
        self.use_phase_shuffle = shift_factor == 0
        self.use_batch_norm = use_batch_norm
        self.use_drop = drop_prob > 0
        self.dropout = nn.Dropout2d(drop_prob)

    def forward(self, x):
        x = self.conv1d(x)
        if self.use_batch_norm:
            x = self.batch_norm(x)
        x = f.leaky_relu(x, negative_slope=self.alpha)
        if self.use_phase_shuffle:
            x = self.phase_shuffle(x)
        if self.use_drop:
            x = self.dropout(x)
        return x

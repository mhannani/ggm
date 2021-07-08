from torch import nn
import torch.functional as f


class Transpose1dLayer(nn.Module):
    def __init__(
        self,
        input_channels,
        output_channels,
        kernel_size,
        stride=(4, ),
        padding=11,
        output_padding=1,
    ):
        super(Transpose1dLayer, self).__init__()
        reflection_pad = nn.ConstantPad1d(kernel_size // 2, value=0)
        conv1d = nn.Conv1d(input_channels, output_channels, kernel_size, stride)
        operation_list = [reflection_pad, conv1d]
        self.transpose_ops = nn.Sequential(*operation_list)

    def forward(self, x):
        # use nearest mode as pointed on the paper
        x = f.interpolate(x, scale_factor=self.upsample, mode="nearest")

        return self.transpose_ops(x)
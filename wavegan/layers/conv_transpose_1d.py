from torch import nn
import torch
import torch.nn.functional as F


class ConvTranspose1d(nn.Module):
    def __init__(
        self,
        input_channels,
        output_channels,
        kernel_size,
        stride=([4, ], ),
        padding=([11, ], ),
        upsample=None,
        output_padding=(1, ),
        use_batch_norm=False,
    ):
        super(ConvTranspose1d, self).__init__()
        self.upsample = upsample
        reflection_pad = nn.ConstantPad1d(kernel_size // 2, value=0)
        conv1d = nn.Conv1d(input_channels, output_channels, kernel_size, stride)
        conv1d.weight.data.normal_(0.0, 0.02)
        conv1d_trans = nn.ConvTranspose1d(
            input_channels, output_channels, kernel_size, stride, padding, output_padding
        )
        batch_norm = nn.BatchNorm1d(output_channels)
        if self.upsample:
            operation_list = [reflection_pad, conv1d]
        else:
            operation_list = [conv1d_trans]

        if use_batch_norm:
            operation_list.append(batch_norm)
        self.transpose_ops = nn.Sequential(*operation_list)
        self.upsample = upsample

    def forward(self, x):
        # use nearest mode as pointed on the paper
        if self.upsample:
            # recommended by wavgan paper to use nearest upsampling
            x = nn.functional.interpolate(x, scale_factor=self.upsample, mode="nearest")

        return self.transpose_ops(x)
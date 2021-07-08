from torch import nn
from ..layers import Conv1dLeakyReluPhaseShuffle as conv1d


class Discriminator(nn.Module):
    """
    The discriminator model.
    """

    def __init__(
        self,
        model_size=64,
        num_channels=1,
        shuffle_factor=2,
        alpha=0.2,
        verbose=False,
        slice_len=16384,
        use_batch_norm=False
    ):
        super(Discriminator, self).__init__()
        self.model_size = model_size
        self.use_batch_norm = use_batch_norm
        self.num_channels = num_channels
        self.shift_factor = shuffle_factor
        self.alpha = alpha
        self.verbose = verbose

    def _build(self):
        """
        Build the stacked layers.
        :return:
        """
        num_channels = self.num_channels
        model_size = self.model_size
        shift_factor = self.shift_factor
        input_channels_iter = [num_channels, model_size, 2 * model_size, 4 * model_size, 8 * model_size]
        output_channels_iter = [model_size, 2 * model_size, 4 * model_size, 8 * model_size, 16 * model_size]
        shift_factor_iter = [shift_factor, shift_factor, shift_factor, shift_factor, 0]
        convolutional_layers = [
            conv1d(
                i,
                j,
                25,
                stride=4,
                padding=11,
                alpha=self.alpha,
                shift_factor=k,
            ) for i, j, k in zip(input_channels_iter, output_channels_iter, shift_factor_iter)]

        self.fc_input_size = 256 * model_size
        self.convolutional_layers = nn.ModuleList(convolutional_layers)
        self.fc1 = nn.Linear(self.fc_input_size, 1)

    def forward(self, x):
        for conv in self.conv_layers:
            x = conv(x)
        x = x.view(-1, self.fc_input_size)

        return self.fc1(x)


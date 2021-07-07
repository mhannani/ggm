from torch import nn


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

        self.model_size = model_size
        self.use_batch_norm = use_batch_norm
        self.num_channels = num_channels
        self.shift_factor = shuffle_factor
        self.alpha = alpha
        self.verbose = verbose





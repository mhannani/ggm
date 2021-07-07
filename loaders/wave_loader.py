import numpy as np
import torch
from ..utils import get_recursive_files
from ..utils import audio_stream_sampling


class WaveLoader:
    """"
    The wave files loader and manipulator to train the network.
    """

    def __init__(self, folder_path, audio_extension="wav"):
        """
        The constructor of the class
        :param folder_path: string
            the training fodler path.
        :param audio_extension: string
            audio extension
        """

        self.audio_paths = get_recursive_files(folder_path, audio_extension)
        self.data_iter = None
        self.initialize_iterator()

    def initialize_iterator(self):
        """
        Create am iterator
        :return:
        """

        data_iter = audio_stream_sampling(self.audio_paths)
        self.data_iter = iter(data_iter)

    @staticmethod
    def numpy_to_tensor(numpy_array):
        """
        Convert a numoy array to tensor.
        :param numpy_array: ndarray arrray
        :return: tensor
        """
        numpy_array = numpy_array[:, np.newaxis, :]
        return torch.Tensor(numpy_array).to(torch.device("cpu"))

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
            the training folder path.
        :param audio_extension: string
            audio extension
        """

        self.audio_paths = get_recursive_files(folder_path, audio_extension)
        self.data_iter = None
        self.initialize_iterator()

    def initialize_iterator(self):
        """
        Create an iterator
        :return:
        """

        data_iter = audio_stream_sampling(self.audio_paths)
        self.data_iter = iter(data_iter)

    def __len__(self):
        return len(self.audio_paths)

    def __iter__(self):
        return self

    def __next__(self):
        x = next(self.data_iter)
        return self.numpy_to_tensor(x["single"])

    @staticmethod
    def numpy_to_tensor(numpy_array):
        """
        Convert a numpy array to tensor.
        :param numpy_array: ndarray array
        :return: tensor
        """
        numpy_array = numpy_array[:, np.newaxis, :]
        return torch.Tensor(numpy_array).to(torch.device("cpu"))

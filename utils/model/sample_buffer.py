import numpy as np
from ..consts import WINDOW_LENGTH


def sample_buffer(buffer_data, start_idx=None, end_idx=None):
    """
    Select the buffer from audio to fid it to memory.
    :param buffer_data: audio file
    :param start_idx: start index if provided
    :param end_idx: end index if provided
    :return: the sampled buffer
    """

    # divide the audio into 4 buffer.
    audio_len = len(buffer_data) // 4

    if audio_len == WINDOW_LENGTH:
        sample = buffer_data

    else:
        if start_idx is None or end_idx is None:
            start_idx = np.random.randint(0, (audio_len - WINDOW_LENGTH) // 2)
            end_idx = start_idx + WINDOW_LENGTH
        sample = buffer_data[start_idx * 4 : end_idx * 4]

    return sample

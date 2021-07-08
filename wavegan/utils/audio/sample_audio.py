import numpy as np
from .consts import WINDOW_LENGTH


def sample_audio(audio_data, start_index=None, end_index=None):
    """
    Sample a window from an audio if its length is greater then the windows length, the audio its self
    if its lenght is the same as the window length.

    :param audio_data: an audio as array
    :param start_index: start index if provided
    :param end_index: end index if provided.
    :return: the sample extracted
    """
    audio_len = len(audio_data)

    # the window and audio length are the same
    if audio_len == WINDOW_LENGTH:
        # yield the entire audio.
        sample = audio_data

    else:
        # select a random window from the audio
        if start_index is None or end_index is None:
            start_index = np.random.randint(0, (audio_len - WINDOW_LENGTH) // 2)
            end_index = start_index + WINDOW_LENGTH
        sample = audio_data[start_index:end_index]
    sample = sample.astype("float32")

    return sample

from .load_wav import  load_wav
from .sample_audio import sample_audio


def sample_generator(file_path):
    """
    Load and sample sample and yield it.
    :param file_path: string
        path of the audio.
    :return: sampled audio
    """

    audio_data = load_wav(file_path)
    while True:
        yield {"single": sample_audio(audio_data)}

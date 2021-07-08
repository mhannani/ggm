import librosa
import numpy as np
from .consts import LOGGER
from .consts import WINDOW_LENGTH


def load_wav(wav_file_path, normalize_audio=True):
    try:
        audio_data, _ = librosa.load(wav_file_path, sr=16000)

        if normalize_audio:
            # Clip magnitude
            max_mag = np.max(np.abs(audio_data))
            if max_mag > 1:
                audio_data /= max_mag
    except Exception as e:
        LOGGER.error("Could not load {}: {}".format(wav_file_path, str(e)))
        raise e
    audio_len = len(audio_data)
    if audio_len < WINDOW_LENGTH:
        pad_length = WINDOW_LENGTH - audio_len
        left_pad = pad_length // 2
        right_pad = pad_length - left_pad
        audio_data = np.pad(audio_data, (left_pad, right_pad), mode="constant")

    return audio_data.astype("float32")

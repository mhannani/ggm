import unittest
import numpy as np
from .. import load_wav

WAV_FILE_PATH = './waves/train/out_3_000.wav'
NORMALIZE_AUDIO = True


class TestLoadWav(unittest.TestCase):
    def setUp(self):
        self.func = load_wav
        self.audio_data = self.func(WAV_FILE_PATH, NORMALIZE_AUDIO)

    def test_wav_file_array_representation(self):
        self.assertTrue(np.any(self.audio_data))
        print('wave file is OK !')


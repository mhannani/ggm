import unittest
from .. import save_audio
from .. import load_wav
WAV_FILE_PATH = './waves/train/out_3_000.wav'


class TestSampleGenerator(unittest.TestCase):
    def setUp(self):
        self.func = save_audio
        self.loaded_wav = load_wav(WAV_FILE_PATH)

    def test_space_interpolation(self):
        self.sample_generator_wav_file = self.func(self.loaded_wav, 'test')
        print("sample generator test was successful !")

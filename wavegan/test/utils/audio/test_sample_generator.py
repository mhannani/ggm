import unittest
from .. import sample_generator

WAV_FILE_PATH = './waves/train/out_3_000.wav'


class TestSampleGenerator(unittest.TestCase):
    def setUp(self):
        self.func = sample_generator

    def test_space_interpolation(self):
        self.sample_generator_wav_file = self.func(WAV_FILE_PATH)
        print("sample generator test was successful !")

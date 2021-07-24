import unittest
import torch
from .. import visualize_audio
from .. import load_wav
WAV_FILE_PATH = './waves/train/out_3_000.wav'


class TestLoadWav(unittest.TestCase):
    def setUp(self):
        self.func = visualize_audio

    def test_wav_file_array_representation(self):
        encoded_wav = load_wav(WAV_FILE_PATH)
        wav_tenor = torch.tensor(encoded_wav)
        print(type(encoded_wav))
        self.func(wav_tenor, True)
        print('wave file is OK !')

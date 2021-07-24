import unittest
from .. import sample_audio
from .. import load_wav
WAV_FILE_PATH = './waves/train/out_3_000.wav'


class TestSampleAudio(unittest.TestCase):
    def setUp(self):
        self.func = sample_audio
        self.audio_data = load_wav(WAV_FILE_PATH)

    def test_sample_audio(self):
        self.sample = self.func(self.audio_data)
        print("sample audio: ", self.sample)

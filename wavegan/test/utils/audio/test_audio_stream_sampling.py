import unittest
import os
from .. import audio_stream_sampling
from .. import get_recursive_files
TARGET_SIGNALS_DIR = './waves/'
EXT = 'wav'


class TestAudioStreamSampling(unittest.TestCase):
    def setUp(self):
        self.cls = audio_stream_sampling
        self.signal_paths = get_recursive_files(os.path.join(TARGET_SIGNALS_DIR, 'train'), EXT)

    def test_space_interpolation(self):
        self.audio_stream_sampled = audio_stream_sampling(self.signal_paths)
        print('Audio stream reader has been created successfully !')

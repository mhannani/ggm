import unittest
import os
from .. import WaveLoader
TARGET_SIGNALS_DIR = './waves/'


class TestWaveLoader(unittest.TestCase):
    def setUp(self):
        self.cls = WaveLoader

    def test_space_interpolation(self):
        self.train_data_loader = self.cls(os.path.join(TARGET_SIGNALS_DIR, "train"))
        self.valid_data_loader = self.cls(os.path.join(TARGET_SIGNALS_DIR, "valid"))
        print(f'There is {self.train_data_loader.__len__()} training files')
        print(f'There is {self.valid_data_loader.__len__()} validation files')

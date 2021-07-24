import unittest
from os import path
from utils import get_recursive_files

FOLDER_PATH = './waves'
EXT = 'wav'


class TestGetRecursiveFiles(unittest.TestCase):
    def setUp(self):
        self.func = get_recursive_files
        self.training_files = self.func(path.join(FOLDER_PATH, 'train'), EXT)
        self.validation_files = self.func(path.join(FOLDER_PATH, 'valid'), EXT)

    def test_training_wav_file_existence(self):
        self.assertTrue(self.training_files)
        print('training data is OK !')

    def test_validation_wav_file_existence(self):
        self.assertTrue(self.validation_files)
        print('validation data is OK !')

import unittest
from .. import make_path
OUTPUT_PATH = '../output_directory'


class TestMakePath(unittest.TestCase):
    def setUp(self):
        self.func = make_path
        self.folder_name = self.func(OUTPUT_PATH)

    def test_training_wav_file_existence(self):
        self.assertTrue(self.folder_name)
        print(f'{self.folder_name} Folder created !')

from utils.get_recursive_files import get_recursive_files

FOLDER_PATH = '../waves'
EXT = 'wav'

all_files_in_folder = get_recursive_files(FOLDER_PATH, EXT)

for file in all_files_in_folder:
    print(file)

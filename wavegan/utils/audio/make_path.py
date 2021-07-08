import os


def make_path(output_path):
    if not os.path.isdir(output_path):
        os.makedirs(output_path)
    return output_path

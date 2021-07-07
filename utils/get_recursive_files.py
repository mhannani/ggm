import os


def get_recursive_files(folder_path, ext):
    results = os.listdir(folder_path)
    out_files = []
    for file in results:
        if os.path.isdir(os.path.join(folder_path, file)):
            print(file)
            out_files += get_recursive_files(os.path.join(folder_path, file), ext)
        elif file.endswith(ext):
            out_files.append(os.path.join(folder_path, file))

    return out_files

from utils.load_wav import load_wav

WAV_FILE_PATH = './waves/train/out_3_000.wav'
NORMALIZE_AUDIO = True
audio_data = load_wav(WAV_FILE_PATH, NORMALIZE_AUDIO)
print(audio_data)

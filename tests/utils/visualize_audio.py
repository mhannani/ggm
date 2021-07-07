import os
import librosa
import numpy as np
import matplotlib.pyplot as plt


def visualize_audio(audio_tensor):
    """
    Takes an audio tensor and display its spectrogram representation
    :param audio_tensor:
    :return:
    """
    # detach the audio tensor from the graph(so no gradient required) and copy the resulting tensor
    # to the cpu memory and convert it into numpy ndarray.
    input_audios = audio_tensor.detach().cpu().numpy()

    # create a figure
    plt.figure(figsize=(18, 50))

    for i, audio in enumerate(input_audios):
        plt.subplot(10, 2, i + 1)
        D = librosa.amplitude_to_db(np.abs(librosa.stft(audio[0])), ref=np.max)
        librosa.display.specshow(D, y_axis="linear")
        plt.colorbar(format="%+2.0f dB")
        plt.title("Linear-frequency power spectrogram %i" % (i + 1))

    if not (os.path.isdir("..visualization")):
        os.makedirs("../visualization")
    plt.savefig("../visualization/interpolation.png")

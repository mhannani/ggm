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

    # construct the representation
    for i, audio in enumerate(input_audios):
        plt.subplot(10, 2, i + 1)

        # Convert an amplitude spectrogram to dB-scaled spectrogram.
        db = librosa.amplitude_to_db(np.abs(librosa.stft(audio[0])), ref=np.max)
        librosa.display.specshow(db, y_axis="linear")
        plt.colorbar(format="%+2.0f dB")
        plt.title("Linear frequency spectrogram %i" % (i + 1))

    # create visualization folder if not already exist.
    if not (os.path.isdir("../../visualization")):
        os.makedirs("../../visualization")

    # save the spectrogram to the specified location
    plt.savefig("../../visualization/interpolation.png")

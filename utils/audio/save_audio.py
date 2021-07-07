import os
import librosa
from ..make_path import make_path
from ..consts import OUTPUT_DIR


def save_audio(samples, epoch):

    """
    Save output audio
    """

    # create directory for generated audio at each epoch.
    sample_dir = make_path(os.path.join(OUTPUT_DIR, str(epoch)))

    # loop through samples and write them to the disk.
    for idx, sample in enumerate(samples):
        # create the path of audio with wav extension.
        output_path = os.path.join(sample_dir, "{}.wav".format(idx + 1))
        librosa.output.write_wav(output_path, sample[0], 16000)

import pescador
from .sample_generator import sample_generator
from ..consts import BATCH_SIZE


def audio_stream_sampling(file_path_list):
    data_streams = []

    # loop through training data.
    for audio_path in file_path_list:
        # create stream for each sample
        stream = pescador.Streamer(sample_generator, audio_path)

        data_streams.append(stream)
    mux = pescador.ShuffledMux(data_streams)
    batch_gen = pescador.buffer_stream(mux, BATCH_SIZE)
    return batch_gen

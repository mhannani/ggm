from ..utils import *
from ..loaders import *
import logging

WINDOW_LENGTH = 65536
LOGGER = logging.getLogger('wavegan')
LOGGER.setLevel(logging.DEBUG)

__all__ = [
    'WINDOW_LENGTH',
    'LOGGER',
]

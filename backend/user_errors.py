class ValueNotSet(Exception):
    """Raised when value is not present is json"""
    def __init__(self, message=''):
        super(ValueNotSet, self).__init__(message)
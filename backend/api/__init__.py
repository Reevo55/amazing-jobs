from flask import Blueprint

bp = Blueprint('api', __name__)

from . import offers, users, cv_data
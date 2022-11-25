from . import bp
from flask import request, jsonify


@bp.route('/offers', methods=['GET'])
def get_offers():
    return "init"
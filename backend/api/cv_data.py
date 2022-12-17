from ..models import User, CvData
from . import bp
from ..user_errors import ValueNotSet
from .errors import bad_request
from ..app import db
from flask import request, jsonify

@bp.route('/cv/<int:user_id>', methods=['GET'])
def get_cv_data_by_id(user_id):
    try:
        requested_cv_data = CvData.query.filter_by(user_id=user_id).first()
        if requested_cv_data is None:
            return bad_request('CV not found in database')

        cv_dict = requested_cv_data.to_dict()
        return cv_dict
    except:
        return bad_request('Database error')

@bp.route('/cv', methods=['POST'])
def post_cv_data():
    data = request.get_json() or None
    if data is None:
        return bad_request('Lack of job offer data')

    cv_data = CvData()
    try:
        cv_data.from_dict(data)
        db.session.add(cv_data)
        db.session.commit()
    except ValueNotSet as error:
        return bad_request(str(error))
    except Exception as e:
        return bad_request('Problem occured while parsing json')
        
    resp = jsonify(success=True)
    return resp
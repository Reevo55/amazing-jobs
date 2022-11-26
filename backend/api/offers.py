from . import bp
from flask import request, jsonify
from .errors import bad_request
from ..app import db
from ..models import Job, User, FavouriteJobs
from ..user_errors import ValueNotSet

@bp.route('/jobs', methods=['GET'])
def get_offers():
    try:
        requested_job_offers = Job.query.all()
        if requested_job_offers is None:
            return bad_request('Job offers not found in database')

        part_offer_dict = []
        for offer in requested_job_offers:
            part_offer_dict.append(offer.to_dict())
        

        offers_dict = {
            "job_offers" : part_offer_dict
        }

        return offers_dict
    except:
        return bad_request('Database error')

@bp.route('/jobs', methods=['POST'])
def post_offer():
    data = request.get_json() or None
    if data is None:
        return bad_request('Lack of job offer data')

    job_offer = Job()
    try:
        job_offer.from_dict(data)
        db.session.add(job_offer)
        db.session.commit()
    except ValueNotSet as error:
        return bad_request(str(error))
    except Exception as e:
        return bad_request('Problem occured while parsing json')
        
    resp = jsonify(success=True)
    return resp

@bp.route('/jobs', methods=['DELETE'])
def delete_offers():
    return "init"
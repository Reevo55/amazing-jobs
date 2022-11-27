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

@bp.route('/jobs/<int:offer_id>', methods=['GET'])
def get_offer_by_id(offer_id):
    try:
        requested_job_offers = Job.query.filter_by(job_id=offer_id).first()
        if requested_job_offers is None:
            return bad_request('Job offers not found in database')

        offers_dict = requested_job_offers.to_dict()
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

@bp.route('/jobs/<int:jobs_id>', methods=['DELETE'])
def delete_offer_by_id(jobs_id):
    try:
        requested_offer = Job.query.filter_by(job_id=jobs_id).first()
        if requested_offer is None:
            return bad_request('Offer not found in database')

        db.session.delete(requested_offer)
        db.session.commit()
    except:
        return bad_request('Database error')
    
    resp = jsonify(success=True)
    return resp

@bp.route('/jobs/<int:jobs_id>', methods=['POST'])
def edit_offer_by_id(jobs_id):
    data = request.get_json() or None
    if data is None:
        return bad_request('Lack of job offer data to edit')
    
    try:
        requested_offer = Job.query.filter_by(job_id=jobs_id).first()
        if requested_offer is None:
            return bad_request('Offer not found in database')

        db.session.delete(requested_offer)

        job_offer = Job()
        job_offer.from_dict(data)
        db.session.add(job_offer)
        db.session.commit()
    except:
        return bad_request('Database error')
    
    resp = jsonify(success=True)
    return resp

@bp.route('/favourite_jobs/<int:user_id>', methods=['GET'])
def get_favourite_jobs_offers(user_id):
    try:
        favourite_offers = FavouriteJobs.query.filter_by(fav_user_id=user_id).all()

        if favourite_offers is None:
            return bad_request('Favourite offers not found in database')

        part_offer_dict = []
        for favourite_offer in favourite_offers:
            job_offer = Job.query.filter_by(job_id=favourite_offer.fav_job_id).first()
            part_offer_dict.append(job_offer.to_dict())
        
        offers_dict = {
            "favourite_offers" : part_offer_dict
        }
        return offers_dict
    except:
        return bad_request('Database error')
    

@bp.route('/favourite_jobs/<int:user_id>', methods=['POST'])
def add_favourite_jobs_offers(user_id):
    data = request.get_json() or None
    if data is None:
        return bad_request('Lack of job offer data to edit')
    if 'offer_id' not in data:
        return bad_request('Lack of offer data')

    try:
        requested_user = User.query.filter_by(id=user_id).first()
        if requested_user is None:
            return bad_request('User not found in database')
        
        job_offer_id = data['offer_id']
        requested_offer = Job.query.filter_by(job_id=job_offer_id).first()
        if requested_offer is None:
            return bad_request('Offer not found in database')

        fav_offer = FavouriteJobs()
        fav_offer.fav_job_id = job_offer_id
        fav_offer.fav_user_id = user_id
        db.session.add(fav_offer)
        db.session.commit()
        
        resp = jsonify(success=True)
        return resp        
    except:
        return bad_request('Database error')

@bp.route('/apply', methods=['POST'])
def apply_offer():
    return "Applied :)"
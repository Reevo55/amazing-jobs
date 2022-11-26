from .app import db, create_app
from .user_errors import ValueNotSet
from datetime import date
import json
from dateutil import parser
from werkzeug.security import generate_password_hash

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    second_name = db.Column(db.String(255), nullable=False)
    is_recruiter = db.Column(db.Boolean, default=False, nullable=False)
    
    offers = db.relationship("Job", backref='user', lazy='dynamic')

    def __repr__(self):
        return '<User {} {} {} {}>'.format(self.id, self.email, self.first_name, self.second_name)


    def from_dict(self, data):
        fields = ['first_name', 'second_name', 'email', 'password', 'is_recruiter']
        for field in fields:
            if field not in data:
                raise ValueNotSet("Field: "+ field + " not present in json")

        self.first_name = data['first_name']
        self.second_name = data['second_name']
        self.email = data['email']

        # validate password
        self.password = generate_password_hash(data['password'], method='sha256') 
        self.is_recruiter = data['is_recruiter']


    def to_dict(self):
        return_dict = {
            "first_name" : self.first_name,
            "second_name" : self.second_name,
            "email" : self.email,
            "is_recruiter" : self.is_recruiter
        }

        return return_dict


class Job(db.Model):
    __tablename__ = 'job'

    job_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    offer_type = db.Column(db.String(255), default=False, nullable=False) # user / pracuj / olx / jobiee
    
    position_name = db.Column(db.String(255), nullable=False)
    company_name = db.Column(db.String(255), nullable=False)
    job_type = db.Column(db.String(255)) # stacjonarna / zdalna
    salary =  db.Column(db.Float)
    short_description = db.Column(db.Text)
    required_experience = db.Column(db.Text)
    required_skills = db.Column(db.Text)
    things_to_do = db.Column(db.Text)
    required_education = db.Column(db.Text)
    benefits = db.Column(db.Text)

    def __repr__(self):
        return '<Job {} {} {}>'.format(self.job_id, self.user_id, self.offer_type)

    def from_dict(self, data):
        fields = ['user_id', 'position_name','company_name', 'job_type', 'salary', 'short_description', 'required_experience',  'required_skills', 'things_to_do', 'required_education', 'benefits']
        for field in fields:
            if field not in data:
                raise ValueNotSet("Field: "+ field + " not present in json")
         
        self.user_id = data['user_id']
        self.offer_type = data['offer_type']
        self.position_name = data['position_name']
        self.company_name = data['company_name']
        self.job_type = data['job_type']
        self.salary = data['salary']
        self.short_description = data['short_description']
        self.required_experience = data['required_experience']
        self.required_skills = data['required_skills']
        self.things_to_do = data['things_to_do']
        self.required_education = data['required_education']
        self.benefits = data['benefits']


    def to_dict(self):
        return_dict = {
            "job_id" : self.job_id,
            "user_id" : self.user_id,
            "offer_type" : self.offer_type,
            "position_name" : self.position_name,
            "company_name" : self.company_name,
            "job_type" : self.job_type,
            "salary" : self.salary,
            "short_description" : self.short_description,
            "required_experience" : self.required_experience,
            "required_skills" : self.required_skills,
            "things_to_do" : self.things_to_do,
            "required_education" : self.required_education,
            "benefits" : self.benefits
        }

        return return_dict


class FavouriteJobs(db.Model):
    __tablename__ = 'favourite_jobs'
    
    id = db.Column(db.Integer, primary_key=True)
    fav_job_id = db.Column(db.Integer, db.ForeignKey('job.job_id'))
    fav_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

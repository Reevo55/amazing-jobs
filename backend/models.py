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
    cv_documents = db.relationship("CvData", backref='user', lazy='dynamic')

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
        self.password = data['password']#//generate_password_hash(data['password'], method='sha256') 
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

    location = db.Column(db.String(255))
    position_name = db.Column(db.String(255))
    company_name = db.Column(db.String(255))
    job_type = db.Column(db.String(255)) # stacjonarna / zdalna
    salary =  db.Column(db.String(255))
    short_description = db.Column(db.Text) #o firmie
    required_experience = db.Column(db.Text) #oczekiwania
    required_skills = db.Column(db.Text) #twoja rola
    things_to_do = db.Column(db.Text) #twoje zadania
    required_education = db.Column(db.Text) #?
    benefits = db.Column(db.Text) #benefity
    legal = db.Column(db.Text) #zgody na przetwarzanie itp

    def __repr__(self):
        return '<Job {} {} {}>'.format(self.job_id, self.user_id, self.offer_type)

    def from_dict(self, data):
        fields = ['user_id', 'position_name','company_name', 'location', 'job_type', 'salary', 'short_description', 'required_experience',  'required_skills', 'things_to_do', 'required_education', 'benefits', 'legal']
        for field in fields:
            if field not in data:
                raise ValueNotSet("Field: "+ field + " not present in json")
         
        self.user_id = data['user_id']
        self.offer_type = data['offer_type']
        self.location = data['location']
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
        self.legal = data['legal']


    def to_dict(self):
        return_dict = {
            "job_id" : self.job_id,
            "user_id" : self.user_id,
            "offer_type" : self.offer_type,
            "location" : self.location,
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
            "legal" : self.legal
        }

        return return_dict


class FavouriteJobs(db.Model):
    __tablename__ = 'favourite_jobs'
    
    id = db.Column(db.Integer, primary_key=True)
    fav_job_id = db.Column(db.Integer, db.ForeignKey('job.job_id'))
    fav_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class CvData(db.Model):
    __tablename__ = 'cv_data'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    summary = db.Column(db.Text)
    skills = db.Column(db.Text)
    experience = db.Column(db.Text)
    education = db.Column(db.Text)
    languages = db.Column(db.Text)
    courses_certifcates = db.Column(db.Text)
    hobbies = db.Column(db.Text)
    address = db.Column(db.Text)
    phone = db.Column(db.String(255))
    email = db.Column(db.String(255))
    full_name = db.Column(db.String(255))

    def __repr__(self):
        return '<CV data {} {} {}>'.format(self.id, self.user_id, self.summary)

    def from_dict(self, data):
        fields = ['user_id', 'summary','skills', 'experience', 'education', 'languages', 'courses_certifcates', 'hobbies',  'address', 'phone', 'email', 'full_name']
        for field in fields:
            if field not in data:
                raise ValueNotSet("Field: "+ field + " not present in json")
         
        self.user_id = data['user_id']
        self.summary = data['summary']
        self.skills = data['skills']
        self.experience = data['experience']
        self.education = data['education']
        self.languages = data['languages']
        self.courses_certifcates = data['courses_certifcates']
        self.hobbies = data['hobbies']
        self.address = data['address']
        self.phone = data['phone']
        self.email = data['email']
        self.full_name = data['full_name']


    def to_dict(self):
        return_dict = {
            "user_id" : self.user_id,
            "summary" : self.summary,
            "skills" : self.skills,
            "experience" : self.experience,
            "education" : self.education,
            "languages" : self.languages,
            "courses_certifcates" : self.courses_certifcates,
            "hobbies" : self.hobbies,
            "address" : self.address,
            "phone" : self.phone,
            "email" : self.email,
            "full_name" : self.full_name,
        }
        
        return return_dict

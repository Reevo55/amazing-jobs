from flask_migrate import Migrate
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
import secrets
import os
import click
from flask.cli import with_appcontext

db = SQLAlchemy()
migrate = Migrate()

def create_db():
    db.create_all() # create db
    db.session.commit()
    
def drop_db():
    db.drop_all() #drop db
    db.session.commit()

def init_empty_db_cmd():
    db.drop_all()
    db.create_all()
    db.session.commit()

def init_empty_db():
    init_empty_db_cmd()
    click.echo('Initialized empty db')

def init_db_example():
    from .models import User, Job, FavouriteJobs

    init_empty_db()
    user = User()
    user.email = 'asbsadcas@wp.pl'
    user.password = '[asdsa213'
    user.first_name = 'Jakub'
    user.second_name = 'Wtorkowy'
    user.is_recruiter = False
    
    user2 = User()
    user2.email = 'sdsacxas@wp.pl'
    user2.password = '[asdsadsa13'
    user2.first_name = 'Tomek'
    user2.second_name = 'Inny'
    user2.is_recruiter = True

    db.session.add(user)
    db.session.add(user2)

    job1 = Job()
    job1.user_id = 2
    job1.offer_type = 'user'
    job1.position_name = 'Spawacz'
    job1.company_name = "SpawaczPol"
    job1.job_type = "stacjonarna"
    job1.location = "Wrocław"
    job1.salary = "40000"
    job1.short_description = "Bardzo dobra praca. Wszystko jest dobrze"
    job1.required_experience = "Trzeba umieć spawać"
    job1.required_skills = "Trzeba umieć spawać"
    job1.things_to_do = "Spawanie"
    job1.required_education = "Podstawówka"
    job1.benefits = "Darmowe jedzenie"

    job2 = Job()
    job2.offer_type = 'pracuj.pl'
    job2.position_name = 'Konstruktor maszyn'
    job2.company_name = "Konstuktor.pl"
    job2.job_type = "stacjonarna"
    job2.location = "Kraków"
    job2.salary = "50000"
    job2.short_description = "Bardzo fajnie"
    job2.required_experience = "2 lata konstruowania maszyn"
    job2.required_skills = "Konstruowanie maszyn"
    job2.things_to_do = "Będziesz konstruował"
    job2.required_education = "Podstawówka"
    job2.benefits = "Darmowe jedzenie"

    db.session.add(job1)
    db.session.add(job2)

    favourite = FavouriteJobs()
    favourite.fav_job_id = 2
    favourite.fav_user_id = 1
    db.session.add(favourite)
    db.session.commit()

    click.echo('Initialized db with default values')


def init_cli_app(apps):
    for command in [create_db, drop_db, init_empty_db, init_db_example]:
        apps.cli.add_command(apps.cli.command()(command))

class Config(object):
    basedir = os.path.abspath(os.path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_TYPE = "filesystem"
    SESSION_PERMANENT = False
    SECRET_KEY = secrets.token_hex(16)

def create_app(config_class=Config):
    flask_app = Flask(__name__)
    flask_app.config.from_object(config_class)
    Session(flask_app)
    
    db.init_app(flask_app)
    migrate.init_app(flask_app, db)
    init_cli_app(flask_app)

    from backend.api import bp as api_bp
    flask_app.register_blueprint(api_bp)

    return flask_app


if __name__ == "__main__":
    app = create_app()
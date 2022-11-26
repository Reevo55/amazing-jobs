from flask_migrate import Migrate
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
import secrets
import os

db = SQLAlchemy()
migrate = Migrate()

def create_db():
    db.create_all() # create db
    
def drop_db():
    db.drop_all() #drop db

def init_cli_app(apps):
    for command in [create_db, drop_db]:
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
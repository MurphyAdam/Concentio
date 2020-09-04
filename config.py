import os
from dotenv import load_dotenv

"""
	Flask config classes.
	All config classes inherit from the base class
	Config.

"""

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):

	"""
	Environment variabbles
	"""
	APP_ENV = os.environ.get('APP_ENV') or 'production'
	TESTING = os.environ.get('TESTING') or False
	DEBUG = os.environ.get('DEBUG') or False

	"""
	Logs variabbles
	"""
	LOG_TO_STDOUT = os.environ.get('LOG_TO_STDOUT')

class Development(Config):

	"""
	Environment variabbles
	"""
	APP_ENV = os.environ.get('APP_ENV') or 'development'
	TESTING = os.environ.get('TESTING') or False
	DEBUG = os.environ.get('DEBUG') or True

class Testing(Config):

	"""
	Environment variabbles
	"""
	APP_ENV = os.environ.get('APP_ENV') or 'testing'
	TESTING = os.environ.get('TESTING') or True
	DEBUG = os.environ.get('DEBUG') or False

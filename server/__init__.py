import logging, os
from logging.handlers import SMTPHandler, RotatingFileHandler
from flask import Flask
from config import Config, Development

def create_app(config_class=Development):
    """Construct the core application."""
    app = Flask(__name__, static_folder='frontend/build/static', 
        instance_relative_config=False)
    # Application Configuration
    app.config.from_object(config_class)
    with app.app_context():
        # SERVE FRONTEND API BP
        from server.serve_frontend_bp import serve_frontend_bp as serve_frontend_blueprint
        app.register_blueprint(serve_frontend_blueprint)
        # Configute Debugging
        if app.debug or app.testing:
            if app.config['LOG_TO_STDOUT']:
                stream_handler = logging.StreamHandler()
                stream_handler.setLevel(logging.INFO)
                app.logger.addHandler(stream_handler)
            else:
                if not os.path.exists('logs'):
                    os.mkdir('logs')
                file_handler = RotatingFileHandler('logs/musicorum.log',
                                                   maxBytes=20480, backupCount=20)
                file_handler.setFormatter(logging.Formatter(
                    '%(asctime)s %(levelname)s: %(message)s '
                    '[in %(pathname)s:%(lineno)d]'))
                file_handler.setLevel(logging.INFO)
                app.logger.addHandler(file_handler)
            app.logger.setLevel(logging.INFO)
            app.logger.info('Musicorum startup')
        return app

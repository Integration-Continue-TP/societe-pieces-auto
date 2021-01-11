#!flask/bin/python
from flask import Flask, json
from helper import *
from controller import *
from entity import *
from data import *


app = Flask(__name__)
app.register_blueprint(helper)
app.register_blueprint(entity)
app.register_blueprint(data)
app.register_blueprint(controller)


@app.route('/api/', methods=['GET'])
def index():
    return app.response_class(
        response=json.dumps("Building AI Systems API"),
        status=200,
        mimetype='application/json'
    )

@app.errorhandler(Exception)
def exception_handler(error):
    return app.response_class(
        status=400,
        mimetype='application/json'
    )


if __name__ == '__main__':
    app.run(debug=True)

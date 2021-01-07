from flask import jsonify
from . import controller
from data import ClientData


@controller.route('/api/client', methods=['GET'])
def get_client():
    return jsonify(ClientData.get_all())


@controller.route('/api/client/<client_id>', methods=['GET'])
def get_client(client=0):
    return jsonify(ClientData.get_by_id(int(client_id)))

@controller.route('/api/client', methods=['POST'])
def get_token():
    return
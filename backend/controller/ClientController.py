from flask import jsonify
from . import controller
from data import ClientData


@controller.route('/api/clients', methods=['GET'])
def get_clients():
    return jsonify(ClientData.get_all())


@controller.route('/api/clients/<client_id>', methods=['GET'])
def get_client(client_id=0):
    return jsonify(ClientData.get_by_id(int(client_id)))

@controller.route('/api/clients', methods=['POST'])
def get_token():
    return
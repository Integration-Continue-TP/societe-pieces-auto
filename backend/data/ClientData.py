import random
from helper import DateHelper


class ClientData:
    def __init__(self):
        pass

    @staticmethod
    def get_all():
        client_data = [
            {
                'produit_id': 0,
                'client_id': 0,
                'nom': 'Delacompta',
                'prenom': 'Michel',
                'telephone': '06 07 08 09 10',
                'token': 'zPRh7xVz/@H(2syE'
            },
            {
                'produit_id': 0,
                'client_id': 1,
                'nom': 'Zucc',
                'prenom': 'Marc',
                'telephone': '06 05 08 09 10',
                'token': '<t:q&8>f6tnW:-(b'
            }
        ]
        return client_data

    @staticmethod
    def get_by_id(client_id=0):
        return next(x for x in ClientData.get_all() if x["client_id"] == int(client_id))

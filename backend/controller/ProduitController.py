from flask import jsonify
from . import controller
from data import ProduitData


@controller.route('/api/produit', methods=['GET'])
def get_produit():
    return jsonify(ProduitData.get_all())


@controller.route('/api/produit/<produit_id>', methods=['GET'])
def get_produit(produit_id=0):
    return jsonify(ProduitData.get_by_id(produit_id))

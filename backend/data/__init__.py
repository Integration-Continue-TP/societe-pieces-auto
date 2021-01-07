from flask import Blueprint

data = Blueprint('data', __name__)

from .ClientData import ClientData
from .ProduitData import ProduitData

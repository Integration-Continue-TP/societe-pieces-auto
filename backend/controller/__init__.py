from flask import Blueprint

controller = Blueprint('controller', __name__)

from .ProduitController import *
from .ClientController import *
from .ContratController import *

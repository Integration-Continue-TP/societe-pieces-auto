from flask import Blueprint

entity = Blueprint('entity', __name__)

from entity.Sensor import Sensor
from entity.Value import Value
from entity.Model import Model


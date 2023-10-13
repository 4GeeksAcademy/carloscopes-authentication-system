"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

@api.route('/signup', methods=["POST"])
def sign_up():
    body = request.json
    #  Validar si enviaron email, password y fullname
    user = User(email=body.get("email"), password = body.get("password"), fullname = body.get("fullname"))

    try:
        db.session.add(user)
        db.session.commit()

        return jsonify({"message": "Usuario registrado exitosamente"})

    except Exception as error:
        print(error)

    return jsonify([]), 200

@api.route('/login', methods=["POST"])
def login():
    body = request.json
    email = body.get("email", None)
    password = body.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()

    if user is None:
        return jsonify({ "msg": "Bad credencials" }), 400
    else:
        access_token = create_access_token(identity=user.id)
        return jsonify({
            "token": access_token,
            "user_id": user.id
        }), 200
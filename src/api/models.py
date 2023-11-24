from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(180), unique=False, nullable=False)
    fullname = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<User {self.fullname} {self.email}>'

    def __init__(self, email, password, fullname):
        self.email = email
        self.password = password
        self.fullname = fullname

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "fullname": self.fullname
            # do not serialize the password, its a security breach
        }
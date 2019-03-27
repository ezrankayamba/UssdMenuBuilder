from app import db
#from flask_marshmallow import Marshmallow, fields
from marshmallow import Schema, fields, pprint

#ma = Marshmallow()


class Menu(db.Model):
    __tablename__ = 'tbl_menu'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    category = db.Column(db.String(20))
    text_en = db.Column(db.String(320))
    text_sw = db.Column(db.String(320))
    option = db.Column(db.Integer)
    parent_id = db.Column(db.Integer, db.ForeignKey('tbl_menu.id'),
                          nullable=True)
    parent = db.relationship("Menu", back_populates="menus")
    menus = db.relationship('Menu', lazy=True)

    def __init__(self, name, parent_id=None):
        self.name = name
        self.parent_id = parent_id


class MenuSchema(Schema):
    id = fields.Integer()
    parent_id = fields.Integer()
    name = fields.String()
    category = fields.String()
    text_en = fields.String()
    text_sw = fields.String()
    option = fields.Integer()
    menus = fields.Nested('self', many=True)


menu_schema = MenuSchema()
menus_schema = MenuSchema(many=True)

from flask import request, jsonify
from flask_restful import Resource
from app import db
from app.models import Menu, menu_schema, menus_schema


class MenuResource(Resource):
    def get(self):
        menus = Menu.query.filter_by(parent_id=None).all()
        return jsonify(menus_schema.dump(menus).data)

    def post(self):
        data = request.get_json()
        name = data.get('name')
        parent_id = data.get('parent_id', None)
        menu = Menu(name=name, parent_id=parent_id)
        db.session.add(menu)
        db.session.commit()
        return {'result': 0, 'message': 'Success'}

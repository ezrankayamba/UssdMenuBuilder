from flask import render_template
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Menu(db.Model):
    __tablename__ = 'tbl_menu'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    parent_id = db.Column(db.Integer, db.ForeignKey('tbl_menu.id'))
    parent = db.relation('Menu', remote_side=[id])
    children = db.relationship("Menu")

    def __repr__(self):
        return '<Menu %r>' % self.name


@app.route('/menus')
def menus():
    res = {'result': 0, 'message': 'Success'}
    return jsonify(res)


@app.route("/")
def home():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)

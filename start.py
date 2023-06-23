import flask_login
from flask import Flask, render_template, request, url_for, redirect, flash
from flask_login import LoginManager, login_user, logout_user
from flask import session
from flask_login import UserMixin
import data_base_mock
import json

app = Flask(__name__)
app.secret_key = 'hello'
login_manager = LoginManager()
login_manager.init_app(app)
usersDb = data_base_mock.Users()
productsDp = data_base_mock.Products()

login_manager.anonymous_user = data_base_mock.AnonymousUser


@app.route('/')
def index_page():
    us = flask_login.current_user
    return render_template('index.html')


@app.route('/header')
def header():
    us = flask_login.current_user
    return render_template('header.html')


@app.route('/create_product')
def create_product():
    us = flask_login.current_user
    return render_template('create_product.html')


@app.route('/products')
def products():
    us = flask_login.current_user
    return render_template('products.html')


@app.route('/cart')
def cart():
    return render_template('cart.html')



@app.route('/product/<product_id>')
def product(product_id):
    product = productsDp.get_by_id(product_id)
    return render_template('product.html', product=product)


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/register')
def register():
    return render_template('register.html')


# API


@login_manager.user_loader
def load_user(user_id):
    return usersDb.get_by_login(user_id)


@app.route('/api/login', methods=["POST"])
def login_api():
    # data = json.dumps(request.data)
    flogin = json.loads(request.data)['login']
    print(flogin)
    fpassword = json.loads(request.data)['password']

    success = False
    if flogin and fpassword:
        user = usersDb.get_by_login(flogin)
        if user and user.check_password(fpassword):
            login_user(user, remember=True)
            success = True
    return {"success": success}


@app.route('/api/get_products')
def get_products():
    return productsDp.get_all()


@app.route('/api/register')
def register_api():
    return "Not implemented"


@app.route('/api/logout')
def logout():
    logout_user()
    return ""


@app.route('/api/create_product')
def create_product_api():
    return "Not implemented"


@app.route('/api/get_user_info')
def get_user_info_api():
    return flask_login.current_user.json


@app.route('/api/update_user_info', methods=['POST'])
def update_user_info_api():
    flask_login.current_user.data = request.data
    return ""


if __name__ == '__main__':
    app.run()

import flask_login
from flask import Flask, render_template, request, url_for, redirect, flash
from flask_login import LoginManager, login_user, logout_user
from flask import session
from flask_login import UserMixin
import data_base_mock
import json
from p import addUser

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
    lower_bound = request.args.get('lower_bound')
    upper_bound = request.args.get('upper_bound')
    category = request.args.get('category')
    if lower_bound is None: lower_bound = 0
    if upper_bound is None: upper_bound = 2147483647
    return productsDp.get_products(int(lower_bound), int(upper_bound), category)


@app.route('/api/register')
def register_api():
    flogin = json.loads(request.data)['login']
    fpassword = json.loads(request.data)['password']
    fpassword2 = json.loads(request.data)['password2']
    success = False
    if flogin and fpassword and fpassword2 and fpassword == fpassword2:
        addUser(flogin, fpassword)
        usersDb.get_all()
        user = usersDb.get_by_login(flogin)
        login_user(user)
        success = True
    return {"success": success}


@app.route('/api/logout')
def logout():
    logout_user()
    return ""


@app.route('/api/create_product')
def create_product_api():
    title = request.args.get('name')
    price = int(request.args.get('psw-repeat'))
    category = request.args.get('file')
    description = request.args.get('description')
    picture_path = request.args.get('file')
    productsDp.create_product(title, price, category, picture_path, description)
    return "Done"


@app.route('/api/get_user_info')
def get_user_info_api():
    return flask_login.current_user.json


@app.route('/api/update_user_info', methods=['POST'])
def update_user_info_api():
    flask_login.current_user.data.append(request.data.decode('utf-8'))
    flask_login.current_user.data = list(set(flask_login.current_user.data))
    return []


@app.route('/api/delete_user_info', methods=['POST'])
def delete_user_info_api():
    flask_login.current_user.data.remove(request.data.decode('utf-8'))
    return []


if __name__ == '__main__':
    app.run()

import os

from werkzeug.utils import secure_filename
import flask_login
from flask import Flask, render_template, request, url_for, redirect, flash
from flask_login import LoginManager, login_user, logout_user
from flask import session
from flask_login import UserMixin
import data_base_mock
import json
from p import addUser

UPLOAD_FOLDER = '/path/to/the/uploads'

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


@app.route('/footer')
def footer():
    us = flask_login.current_user
    return render_template('footer.html')


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
    print(request.data)
    flogin = json.loads(request.data)['login']
    fpassword = json.loads(request.data)['password']
    frememberMe = json.loads(request.data)['rememberMe']

    success = False
    error = ''
    if flogin and fpassword:
        user = usersDb.get_by_login(flogin)
        if user and user.check_password(fpassword):
            login_user(user, remember=frememberMe)
            success = True
        else:
            error = "Неверное имя пользователя или пароль"
    else:
        error = "Введите имя пользователя и пароль"

    return {"success": success, "error": error}


@app.route('/api/register', methods=["POST"])
def register_api():
    print(request.data)
    flogin = json.loads(request.data)['login']
    fmail = json.loads(request.data)['mail']
    fpassword = json.loads(request.data)['password']
    fpassword2 = json.loads(request.data)['confirmPassword']
    frememberMe = json.loads(request.data)['rememberMe']
    success = False
    error = ''
    usersDb.get_all()
    if flogin and fpassword and fpassword2 and usersDb.get_by_login(flogin) is None:
        if fpassword == fpassword2:
            addUser(flogin, fpassword, fmail)
            usersDb.get_all()
            user = usersDb.get_by_login(flogin)
            login_user(user, remember=frememberMe)
            success = True
        else:
            error = "Пароли не совпадают"
    else:
        error = "Пожалуйста, введите все данный"

    return {"success": success, "error": error}


@app.route('/api/get_products')
def get_products():
    lower_bound = request.args.get('lower_bound')
    upper_bound = request.args.get('upper_bound')
    categories = request.args.get('category')
    if categories == '' or categories is None:
        return []
    categories = categories.split(',')
    if lower_bound is None or lower_bound == 'null' or lower_bound == '':
        lower_bound = 0
    if upper_bound is None or upper_bound == 'null' or lower_bound == '':
        upper_bound = 2147483647
    return productsDp.get_products(int(lower_bound), int(upper_bound), categories)


@app.route('/api/logout')
def logout():
    logout_user()
    return ""


@app.route('/upload')
def upload_get():
    return render_template('upload.html')


@app.route('/upload_file', methods=['POST'])
def upload_post():
    name = request.form.get('name')
    if name == '':
        return {"success": False, "error": "Не введено название"}
    if 'file' not in request.files:
        return {"success": False, "error": "Не передан файл"}
    file = request.files['file']
    if file.filename == '':
        return {"success": False, "error": "Файл пустой"}

    if file and allowed_file(file.filename):
        file.save(os.curdir + '\\static\\img\\homeworks\\' + name + "." + file.filename.split('.')[-1])
        return {"success": True, "error": "", "filename": name + "." + file.filename.split('.')[-1]}
    return {"success": False, "error": "Произошла неизвестная ошибка"}


def allowed_file(filename):
    """ Функция проверки расширения файла """
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg'}
    return render_template('upload.html')


@app.route('/api/create_product', methods=['POST'])
def create_product_api():
    title = json.loads(request.data)['name']
    price = json.loads(request.data)['price']
    category = json.loads(request.data)['category']
    description = json.loads(request.data)['description']
    picture_path = json.loads(request.data)['picture_path']
    author = flask_login.current_user.login

    if title and price and category and description:
        print(title, price, category, picture_path, description)
        productsDp.create_product(title, price, category, picture_path, description, author)
        return {"success": True}
    else:
        return {"success": False, "error": "Не все поля заполнены"}


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

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
def main_page():
    us = flask_login.current_user
    return render_template('index.html')


@app.route('/get_products')
def get_products():
    return productsDp.get_all()


@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/api/logout')
def logout():
    logout_user()


@app.route('/api/get_user_info')
def get_user_info():
    user = flask_login.current_user
    return flask_login.current_user.json


@login_manager.user_loader
def load_user(user_id):
    return usersDb.get_by_login(user_id)


@app.route('/api/login', methods=["POST"])
def login_page():
    flogin = request.form.get('login')
    fpassword = request.form.get('password')

    if flogin and fpassword:
        user = usersDb.get_by_login(flogin)

        if user and user.check_password(fpassword):
            login_user(user)

            next_page = request.args.get('next')

            return redirect(url_for('main_page'))
        else:
            flash('Login or password is not correct')
    else:
        flash('Please fill login and password fields')


if __name__ == '__main__':
    app.run()

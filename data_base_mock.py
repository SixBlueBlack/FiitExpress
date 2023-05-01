import json

from flask_login import UserMixin, AnonymousUserMixin


class Products:
    def __init__(self):
        with open("./products.json", encoding='utf-8') as json_file:
            data = json.load(json_file)
            self.data = data

    def get_all(self):
        return self.data


class UserCommon:
    def __init__(self, login='anonymus', password='anonymus'):
        self.id = login
        self.password = password
        self.login = login
        self.data = ''

    @property
    def json(self):
        return json.dumps({
            'is_anonymous': self.is_anonymous,
            'login': self.login,
            'data': self.data
        })

    def set_password(self, password):
        self.password = password

    def check_password(self, password):
        return self.password == password


class AnonymousUser(UserCommon, AnonymousUserMixin):
    pass


class User(UserCommon, UserMixin):
    pass


class Users:
    def __init__(self):
        with open("./users.json", encoding='utf-8') as json_file:
            data = json.load(json_file)
            res = []
            for e in data:
                res.append(User(e['login'], e['password']))
            self.data = res

    def get_all(self):
        return self.data

    def get_by_login(self, login):
        for e in self.data:
            if e.login == login:
                return e

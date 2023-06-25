import json

from flask_login import UserMixin, AnonymousUserMixin
from p import select_products, select_products_by_id, select_products_by_category_and_price, select_products_by_price, \
    addProduct, select_users, Product

from typing import List, Any, Dict


class Products:
    def __init__(self) -> None:
        pass

    @staticmethod
    def get_dict(elem: Product) -> Dict[str, Any]:
        fields = vars(elem)
        fields.pop('_sa_instance_state')
        return fields

    def get_products(self, lower_bound: int, upper_bound: int, categories: List[str]) -> List[Dict[str, Any]]:
        if categories[0] != "all":
            return self.get_products_by_category_and_price(categories, lower_bound, upper_bound)
        if lower_bound != 0 or upper_bound != 2147483647:
            return self.get_products_by_price(lower_bound, upper_bound)
        else:
            return self.get_all()

    def get_all(self) -> List[Dict[str, Any]]:
        result = []
        for elem in select_products():
            result.append(self.get_dict(elem))
        return result

    def get_products_by_category_and_price(self, categories: List[str], lower_bound: int, upper_bound: int) \
            -> List[Dict[str, Any]]:
        result = []
        for elem in select_products_by_category_and_price(categories, lower_bound, upper_bound):
            result.append(self.get_dict(elem))
        return result

    def get_products_by_price(self, lower_bound: int, upper_bound: int) -> List[Dict[str, Any]]:
        result = []
        for elem in select_products_by_price(lower_bound, upper_bound):
            result.append(self.get_dict(elem))
        return result

    def get_by_id(self, _id: int) -> Dict[str, Any]:
        try:
            for elem in select_products_by_id(int(_id)):
                return self.get_dict(elem)
        except:
            return None

    def create_product(self, title: str, price: int, category: str, picture_path: str, description: str = None) -> None:
        addProduct(title, price, category, picture_path, description)


class UserCommon:
    def __init__(self, login: str = 'anonymus', password: str = 'anonymus') -> None:
        self.id = login
        self.password = password
        self.login = login
        self.data = []

    @property
    def json(self) -> str:
        return json.dumps({
            'is_anonymous': self.is_anonymous,
            'login': self.login,
            'data': self.data
        })

    def set_password(self, password: str) -> None:
        self.password = password

    def check_password(self, password: str) -> bool:
        return self.password == password


class AnonymousUser(UserCommon, AnonymousUserMixin):
    pass


class User(UserCommon, UserMixin):
    pass


class Users:
    def __init__(self) -> None:
        self.data = []
        self.get_all()

    def get_all(self) -> list[User]:
        result = []
        for elem in select_users():
            result.append(User(elem.login, elem.password))
        self.data = result
        return result

    def get_by_login(self, login: str) -> User:
        for e in self.data:
            if e.login == login:
                return e

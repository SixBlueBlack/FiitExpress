from sqlalchemy import select, update
from db.base import session, engine
from db.models import User, Product
from typing import List


def add_user(login: str, password: str, data: str = None) -> None:
    session.add(User(login=login, password=password, data=data))
    session.commit()


def select_users():
    result = session.execute(select(User))
    return result.scalars()


def select_user_by_login(login: str):
    result = session.execute(select(User).where(User.login == login))
    return result.scalars()


def select_products_by_category_and_price(categories: List[str], lower_bound: int, upper_bound: int):
    result = session.execute(select(Product).where(
        (Product.category.in_(categories)) &
        (Product.price.between(lower_bound, upper_bound))
    ))
    return result.scalars()


def select_products_by_price(lower_bound: int, upper_bound: int):
    result = session.execute(select(Product).where(Product.price.between(lower_bound, upper_bound)))
    return result.scalars()


def select_products():
    result = session.execute(select(Product))
    return result.scalars()


def drop_products():
    Product.__table__.drop(engine)


def drop_users():
    User.__table__.drop(engine)


def select_products_by_id(_id: int):
    result = session.execute(select(Product).where(Product.id == _id))
    return result.scalars()


def add_product(name: str, price: int, category: str, picture_path: str, created_by: str, _type: str,
                description: str = None):
    session.add(Product(title=name, description=description, price=price, category=category,
                        imgSrc=picture_path, created_by=created_by, type=_type))
    session.commit()


def delete_product(_id: int):
    session.query(Product).filter(Product.id == _id).delete()
    session.commit()


def update_product(_id: int, new_name: str):
    session.execute(update(Product).where(Product.id == _id).values(
        name=new_name))
    session.commit()

from sqlalchemy import create_engine, Column, Integer, String, select, update
from sqlalchemy.orm import declarative_base, Session
from typing import List

engine = create_engine('postgresql://postgres:postgres@localhost/fiitexpressdb1')
engine.connect()
Base = declarative_base()
session = Session(engine)


class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(String)
    price = Column(Integer, nullable=False)
    category = Column(String, nullable=False)
    imgSrc = Column(String, nullable=False)
    created_by = Column(String, nullable=False)


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    login = Column(String, nullable=False)
    password = Column(String, nullable=False)
    data = Column(String)


def addUser(login: str, password: str, data: str = None) -> None:
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


def addProduct(name: str, price: int, category: str, picture_path: str, created_by: str, description: str = None):
    session.add(Product(title=name, description=description, price=price, category=category,
                        imgSrc=picture_path, created_by=created_by))
    session.commit()


def deleteProduct(_id: int):
    session.query(Product).filter(Product.id == _id).delete()
    session.commit()


def updateProduct(_id: int, new_name: str):
    session.execute(update(Product).where(Product.id == _id).values(
        name=new_name))
    session.commit()


if __name__ == "__main__":
    drop_products()
    drop_users()
    Base.metadata.create_all(engine)
    addProduct("Питон", 300, "Программирование", "python.jpg", "admin", "Pythonчик")
    addProduct("Оси", 250, "Компьютерные науки", "osi.jpg", "admin", "Короткое описание осей")
    addProduct("Физкультура", 230, "Прочие предметы", "fizra.jpg", "admin", "Короткое описание")
    addProduct("Сети", 320, "Компьютерные науки", "seti.jpg", "user", "Короткое описание")
    addProduct("Дискретка по скидке", 100, "Математика", "Шур_ДМ.jpg", "user", "Короткое описание")
    addUser("admin", "admin", "me.mashkin7@gmail.com")
    addUser("user", "user", "me.mashkin7@gmail.com")
    pass

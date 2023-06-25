from sqlalchemy import create_engine, Column, Integer, String, select, update
from sqlalchemy.orm import declarative_base, Session

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


def select_products_by_category_and_price(category: str, lower_bound: int, upper_bound: int):
    result = session.execute(select(Product).where(
        (Product.category == category) &
        (Product.price.between(lower_bound, upper_bound))
    ))
    return result.scalars()


def select_products_by_price(lower_bound: int, upper_bound: int):
    result = session.execute(select(Product).where(Product.price.between(lower_bound, upper_bound)))
    return result.scalars()


def select_products():
    result = session.execute(select(Product))
    return result.scalars()


def select_products_by_id(_id: int):
    result = session.execute(select(Product).where(Product.id == _id))
    return result.scalars()


def addProduct(name: str, price: int, category: str, picture_path: str, description: str = None):
    session.add(Product(title=name, description=description, price=price, category=category,
                        imgSrc=picture_path))
    session.commit()


def deleteProduct(_id: int):
    session.query(Product).filter(Product.id == _id).delete()
    session.commit()


def updateProduct(_id: int, new_name: str):
    session.execute(update(Product).where(Product.id == _id).values(
        name=new_name))
    session.commit()


if __name__ == "__main__":
    Base.metadata.create_all(engine)
    addProduct("Питон", 300, "Программирование", "python.jpg", "Pythonчик")
    addProduct("Оси", 250, "Компьютерные науки", "osi.jpg")
    addProduct("Физкультура", 230, "Прочие предметы", "fizra.jpg")
    addProduct("Сети", 320, "Компьютерные науки", "seti.jpg")
    addProduct("Дискретка по скидке", 100, "Математика", "Шур_ДМ.jpg")
    addUser("admin", "admin")
    addUser("user", "user")
    # print(int(None))
    pass

from db.utils import drop_users, drop_products, add_product, add_user
from db.base import Base, engine


def configureDb():
    drop_products()
    drop_users()
    Base.metadata.create_all(engine)
    add_product("Питон", 300, "Программирование", "python.jpg", "admin", "Задача", "Pythonчик")
    add_product("Оси", 250, "Компьютерные науки", "osi.jpg", "admin", "Задача", "Короткое описание осей")
    add_product("Физкультура", 230, "Прочие предметы", "fizra.jpg", "admin", "Задача", "Короткое описание")
    add_product("Сети", 320, "Компьютерные науки", "seti.jpg", "user", "Задача", "Короткое описание")
    add_product("Дискретка по скидке", 100, "Математика", "Шур_ДМ.jpg", "user", "Задача", "Короткое описание")
    add_product("Репетитор", 150, "Математика", "Mark.jpg", "user", "Репетитор", "Марк")
    add_user("admin", "admin", "me.mashkin7@gmail.com")
    add_user("user", "user", "me.mashkin7@gmail.com")


if __name__ == "__main__":
    configureDb()

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, Session
from db.settings import DatabaseSettings

engine = create_engine(DatabaseSettings().url)
engine.connect()
Base = declarative_base()
session = Session(engine)


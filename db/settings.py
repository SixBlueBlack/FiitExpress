from pydantic import BaseSettings, PostgresDsn

class DatabaseSettings(BaseSettings):
    url: PostgresDsn = 'postgresql://postgres:postgres@localhost/fiitexpressdb1'
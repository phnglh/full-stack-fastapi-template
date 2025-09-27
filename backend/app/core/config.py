from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import MySQLDsn
from pydantic_core import MultiHostUrl


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="./.env",
        env_ignore_empty=True,
        extra="ignore",
    ) 
 
    PROJECT_NAME: str = "MyProject"
    MYSQL_SERVER: str = "localhost"
    MYSQL_USER: str = "root"
    MYSQL_PORT: int = 3306
    MYSQL_PASSWORD: str = ""
    MYSQL_DB: str = ""


    def SQLMODEL_DATABASE_URI(self) -> MySQLDsn:
      return MySQLDsn(str(
          MultiHostUrl.build(
              scheme="mysql+mysqlconnector",
              username=self.MYSQL_USER,
              password=self.MYSQL_PASSWORD,
              host=self.MYSQL_SERVER,
              port=self.MYSQL_PORT,
              path=self.MYSQL_DB,
          )
        ))

settings: Settings = Settings()

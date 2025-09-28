from datetime import datetime, timedelta, timezone
from typing import Any, Dict

import jwt
from passlib.context import CryptContext

from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


ALGORITHM = "HS256"


def create_access_token(subject: str | Any, expires_delta: timedelta) -> str:
    expire = datetime.now(timezone.utc) + expires_delta
    to_encode: Dict[str, Any] = {"exp": expire, "sub": str(subject)}

    secret_key: str = settings.SECRET_KEY

    encoded_jwt = jwt.encode(
        payload=to_encode, 
        key=secret_key, 
        algorithm=ALGORITHM
    )
    
    return encoded_jwt  


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

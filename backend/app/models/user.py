import uuid
from typing import Optional
from sqlmodel import Field
from app.db.base import Base

class User(Base, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    email: str = Field(index=True, nullable=False, unique=True)
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    password: str = Field(nullable=False)
    is_active: bool = Field(default=True)
    is_superuser: bool = Field(default=False)

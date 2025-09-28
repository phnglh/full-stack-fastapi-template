from sqlmodel import select, Session
from app.models.user import User
from typing import List

def get_all_users(session: Session) -> List[User]:
    statement = select(User).options() 
    users = session.exec(statement).all()
    return list(users)

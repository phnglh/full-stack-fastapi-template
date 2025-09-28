from fastapi import APIRouter, Depends
from sqlmodel import Session
from typing import List

from app.db.session import get_session
from app.models.user import User
from app.services.user_service import get_all_users

router = APIRouter()

@router.get("/", response_model=List[User], tags=["User"])
def api_get_users(session: Session = Depends(get_session)):
    return get_all_users(session)

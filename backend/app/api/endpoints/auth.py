from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.api.deps import get_current_user_id, get_db
from app.schemas.auth import LoginResponse, LoginRequest, RegisterRequest
from app.services.auth_service import login as login_service
from app.services.auth_service import register as register_service

router = APIRouter()


@router.post("/login", response_model=LoginResponse)
def login(
        data: LoginRequest,
        db: Session = Depends(get_db),
):
    result = login_service(db, str(data.email), data.password)
    return {"access_token": result.access_token, "role": result.access_token}


@router.post("/register")
def register(
        data: RegisterRequest,
        db: Session = Depends(get_db),
):
    register_service(db, str(data.email), data.password, data.role)


@router.get("/me")
def me(user_id: str = Depends(get_current_user_id)):
    return {"user_id": user_id}

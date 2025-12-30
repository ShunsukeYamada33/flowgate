from fastapi import APIRouter, Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.core.jwt import decode_jwt
from app.schemas.auth import LoginResponse, LoginRequest, RegisterRequest
from app.services.auth_service import login as login_service
from app.services.auth_service import register as register_service

router = APIRouter()
security = HTTPBearer()


@router.post("/login", response_model=LoginResponse)
def login(data: LoginRequest, db: Session = Depends(get_db)):
    result = login_service(db, str(data.email), data.password)
    return {"access_token": result.access_token, "role": result.role}


@router.post("/register")
def register(data: RegisterRequest, db: Session = Depends(get_db)):
    register_service(db, str(data.email), data.password, data.role)


@router.get("/me")
def me(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    payload = decode_jwt(token)

    return {
        "user_id": payload["sub"]
    }

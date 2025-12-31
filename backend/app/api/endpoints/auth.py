from fastapi import APIRouter, Depends, Response

from sqlalchemy.orm import Session

from app.api.deps import get_db, get_current_user
from app.schemas.auth import LoginRequest, RegisterRequest
from app.services.auth_service import login as login_service
from app.services.auth_service import register as register_service

router = APIRouter()


@router.post("/login")
def login(data: LoginRequest,
          response: Response,
          db: Session = Depends(get_db)):
    result = login_service(db, str(data.email), data.password)

    print(result.access_token)
    response.set_cookie(
        key="access_token",
        value=result.access_token,
        httponly=True,
        samesite="lax",
        secure=False,
    )

    return {"role": result.role}


@router.post("/register")
def register(data: RegisterRequest, db: Session = Depends(get_db)):
    register_service(db, str(data.email), data.password, data.role)


@router.get("/me")
def me(user=Depends(get_current_user)):
    return {
        "message": "認証成功 🎉",
        "user": user["username"] if "username" in user else user["sub"],
    }

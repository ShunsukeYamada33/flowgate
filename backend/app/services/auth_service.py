from dataclasses import dataclass

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.repositories.user_repository import get_user_by_email, create_user
from app.core.security import verify_password, hash_password
from app.core.jwt import create_access_token


@dataclass
class LoginResult:
    access_token: str
    role: str


def login(db: Session, email: str, password: str) -> LoginResult:
    user = get_user_by_email(db, email)

    if not user or not verify_password(password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(str(user.id))
    return LoginResult(access_token, user.role)


def register(db: Session, email: str, password: str, role: str):
    # ① 既存ユーザー確認
    existing_user = get_user_by_email(db, email)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    # ② パスワードをハッシュ化
    password_hash = hash_password(password)

    # ③ ユーザー作成
    user = create_user(
        db=db,
        email=email,
        password_hash=password_hash,
        role=role,
    )

    return user

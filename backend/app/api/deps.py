from fastapi import HTTPException, Request

from app.db.session import SessionLocal
from app.core.jwt import verify_access_token


def get_current_user(request: Request):
    token = request.cookies.get("access_token")
    if not token:
        raise HTTPException(status_code=401)

    return verify_access_token(token)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

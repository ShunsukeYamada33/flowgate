from dataclasses import dataclass

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.repositories.applications_repository import get_application
from app.repositories.user_repository import get_user_by_email, create_user
from app.core.security import verify_password, hash_password
from app.core.jwt import create_access_token


class ApplicationResult:
    id: str
    status: str
    title: str


def application(db: Session) -> list[ApplicationResult]:
    applications = get_application(db)
    return applications


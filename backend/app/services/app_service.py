from sqlalchemy.orm import Session

from app.db.models import Application
from app.repositories.applications_repository import get_applications, create_application, get_application, \
    update_application
from sqlalchemy.dialects.postgresql import UUID


def application(db: Session, applicant_id: UUID) -> list[Application]:
    applications = get_applications(db, applicant_id)
    return applications


def register(db: Session, title: str, content: str, status: str, user_id: UUID) -> Application:
    return create_application(db, user_id, title, content, status)


def check(db: Session, application_id: str, user_id: UUID) -> Application:
    return get_application(db, application_id, user_id)


def update(db: Session, application_id: str, user_id: UUID):
    return update_application(db, application_id, user_id)

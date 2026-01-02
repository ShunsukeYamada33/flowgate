from sqlalchemy.orm import Session

from app.db.models import Application
from app.repositories.applications_repository import get_applications, create_application, get_application
from sqlalchemy.dialects.postgresql import UUID


def application(db: Session, applicant_id: UUID) -> list[Application]:
    applications = get_applications(db, applicant_id)
    return applications


def register(db: Session, title: str, content: str, status: str, applicant_id: UUID):
    application = create_application(
        db=db,
        applicant_id=applicant_id,
        title=title,
        content=content,
        status=status
    )

    return application


def check(db: Session, id: str, user_id: UUID) -> Application:
    application = get_application(db, id, user_id)
    return application


def update(db: Session, id: str, content: str, status: str, user_id: UUID):
    return (db.query(Application)
            .filter(Application.id == id, Application.applicant_id == user_id.as_uuid)
            .update({'content': content}, {'status': status}))

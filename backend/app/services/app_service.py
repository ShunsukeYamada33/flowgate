from sqlalchemy.orm import Session

from app.db.models import Application
from app.repositories.applications_repository import get_application, create_application
from sqlalchemy.dialects.postgresql import UUID


def application(db: Session) -> list[Application]:
    applications = get_application(db)
    return applications

def register(db: Session, title: str, content: str, applicant_id: UUID = None):
    application = create_application(
        db=db,
        applicant_id=applicant_id,
        title=title,
        content=content,
    )

    return application
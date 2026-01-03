from sqlalchemy.orm import Session

from app.core.enums.application_status import ApplicationStatus
from app.db.models.application import Application
from sqlalchemy.dialects.postgresql import UUID


def get_applications(db: Session, applicant_id: UUID) -> list[Application]:
    return db.query(Application).filter(Application.applicant_id == applicant_id.as_uuid).all()


def create_application(db: Session, applicant_id: UUID, title: str, content: str, status: str) -> Application:
    application = Application(
        applicant_id=applicant_id.as_uuid,
        title=title,
        content=content,
        status=status,
    )
    db.add(application)
    db.commit()
    db.refresh(application)
    return application


def get_application(db: Session, application_id: str, applicant_id: UUID) -> Application | None:
    return (db.query(Application)
            .filter(Application.id == application_id, Application.applicant_id == applicant_id.as_uuid)
            .first()
            )


def update_application(db: Session, application_id: str, applicant_id: UUID) -> Application | None:
    application = (
        db.query(Application)
        .filter(Application.id == application_id, Application.applicant_id == applicant_id.as_uuid)
        .first()
    )

    if application is None:
        return None

    application.status = ApplicationStatus.SUBMITTED.value

    db.commit()
    db.refresh(application)
    return application

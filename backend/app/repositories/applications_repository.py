from sqlalchemy.orm import Session
from app.db.models.application import Application
from uuid import UUID


def get_applications(db: Session, applicant_id: UUID) -> list[Application]:
    return db.query(Application).filter(Application.applicant_id == applicant_id.as_uuid).all()


def create_application(db: Session, applicant_id: UUID, title: str, content: str, status: str):
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

def get_application(db: Session, id: str, applicant_id: UUID) -> Application:
    return db.query(Application).filter(Application.applicant_id == applicant_id.as_uuid, Application.id == id).first()
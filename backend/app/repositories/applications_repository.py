from sqlalchemy.orm import Session
from app.db.models.application import Application
from sqlalchemy.dialects.postgresql import UUID


def get_application(db: Session) -> list[Application]:
    return db.query(Application).all()


def create_application(db: Session, applicant_id: UUID, title: str, content: str):
    application = Application(
        applicant_id=applicant_id,
        title=title,
        content=content,
    )
    db.add(application)
    db.commit()
    db.refresh(application)
    return application

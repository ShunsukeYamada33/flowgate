from sqlalchemy.orm import Session
from app.db.models.application import Application


def get_application(db: Session) -> list[Application]:
    return db.query(Application).all()

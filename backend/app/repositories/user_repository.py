from sqlalchemy.orm import Session
from app.db.models.user import User


def get_user_by_email(db: Session, email: str) -> User | None:
    return db.query(User).filter(User.email == email).first()


def create_user(db: Session, email: str, password_hash: str, role: str):
    user = User(
        email=email,
        password_hash=password_hash,
        role=role,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def submit(db: Session):
    db.commit()


def approve(db: Session, approver_id: str, comment: str):
    db.commit()


def reject(db: Session, approver_id: str, comment: str):
    db.commit()


def return_to_applicant(db: Session, approver_id: str, comment: str):
    db.commit()


def edit(db: Session, content: str):
    db.commit()

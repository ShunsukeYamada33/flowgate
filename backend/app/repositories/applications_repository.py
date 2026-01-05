from sqlalchemy.orm import Session

from app.core.enums.application_status import ApplicationStatus
from app.db.models import ApprovalHistory
from app.db.models.application import Application
from uuid import UUID


def get_applications(db: Session, applicant_id: UUID) -> list[Application]:
    return db.query(Application).filter(Application.applicant_id == applicant_id).all()


def create_application(db: Session, applicant_id: UUID, title: str, content: str, status: str) -> Application:
    application = Application(
        applicant_id=applicant_id,
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
            .filter(Application.id == application_id, Application.applicant_id == applicant_id)
            .first()
            )


def submit_application(db: Session, application_id: str, applicant_id: UUID) -> Application | None:
    application = (
        db.query(Application)
        .filter(Application.id == application_id, Application.applicant_id == applicant_id)
        .first()
    )

    if application is None:
        return None

    # 既に提出済みの場合は更新しない（履歴の重複を防ぐ）
    if application.status != ApplicationStatus.DRAFT.value:
        return application

    status = ApplicationStatus.SUBMITTED.value
    application.status = status

    approval_history = ApprovalHistory(
        application_id=application.id,
        action=status,
        actor_id=applicant_id,
    )

    db.add(approval_history)

    db.commit()
    db.refresh(application)
    db.refresh(approval_history)
    return application

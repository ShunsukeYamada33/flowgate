from fastapi import APIRouter, Depends

from app.api.deps import get_db, get_current_user, get_current_user_id
from app.schemas.app import ApplicationsResponse, RegisterRequest
from sqlalchemy.orm import Session
from app.services.app_service import application as app_service
from app.services.app_service import register as register_service
from sqlalchemy.dialects.postgresql import UUID

router = APIRouter(dependencies=[Depends(get_current_user)])


@router.get("/applications", response_model=list[ApplicationsResponse])
def applications(db: Session = Depends(get_db)):
    result = app_service(db)
    return result


@router.post("/register-application")
def register_application(
        data: RegisterRequest,
        db: Session = Depends(get_db),
        user_id: UUID = Depends(get_current_user_id),
):
    result = register_service(db, data.title, data.content, user_id)
    return result

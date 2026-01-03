from fastapi import APIRouter, Depends

from app.api.deps import get_db, get_current_user, get_current_user_id
from app.schemas.app import ApplicationsResponse, RegisterRequest, CheckRequest, UpdateRequest, RegisterResponse
from sqlalchemy.orm import Session
from app.services.app_service import application as app_service
from app.services.app_service import register as register_service
from app.services.app_service import check as check_service
from app.services.app_service import update as update_service
from sqlalchemy.dialects.postgresql import UUID

router = APIRouter(dependencies=[Depends(get_current_user)])


@router.get("/applications", response_model=list[ApplicationsResponse])
def applications(db: Session = Depends(get_db), user_id: UUID = Depends(get_current_user_id)):
    result = app_service(db, user_id)
    return result


@router.post("/register-application", response_model=RegisterResponse)
def register_application(
        data: RegisterRequest,
        db: Session = Depends(get_db),
        user_id: UUID = Depends(get_current_user_id),
):
    result = register_service(db, data.title, data.content, data.status, user_id)
    user_id = str(result.id)
    print(user_id)
    return {'id': user_id}


@router.post("/application-check", response_model=ApplicationsResponse)
def application_check(
        data: CheckRequest,
        db: Session = Depends(get_db),
        user_id: UUID = Depends(get_current_user_id)
):
    result = check_service(db, data.id, user_id)
    return result


@router.post("/update-application")
def update_application(
        data: UpdateRequest,
        db: Session = Depends(get_db),
        user_id: str = Depends(get_current_user_id)
):
    result = update_service(db, data.id, user_id)
    return result

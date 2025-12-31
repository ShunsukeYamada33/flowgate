from fastapi import APIRouter, Depends

from app.api.deps import get_db, get_current_user
from app.schemas.app import ApplicationsResponse
from sqlalchemy.orm import Session
from app.services.app_service import application as app_service

router = APIRouter(dependencies=[Depends(get_current_user)])


@router.get("/applications", response_model=list[ApplicationsResponse])
def applications(db: Session = Depends(get_db)):
    result = app_service(db)
    return result

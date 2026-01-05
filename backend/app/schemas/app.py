from pydantic import BaseModel
from uuid import UUID


class ApplicationsResponse(BaseModel):
    id: UUID
    title: str
    content: str
    status: str

    class Config:
        json_encoders = {
            UUID: lambda v: str(v)
        }


class RegisterRequest(BaseModel):
    title: str
    content: str
    status: str


class RegisterResponse(BaseModel):
    id: str


class SubmitRequest(BaseModel):
    id: str


class CheckRequest(BaseModel):
    id: str

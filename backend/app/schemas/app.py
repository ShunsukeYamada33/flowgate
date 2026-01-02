from pydantic import BaseModel


class ApplicationsResponse(BaseModel):
    id: str
    status: str
    title: str

class RegisterRequest(BaseModel):
    title: str
    content: str
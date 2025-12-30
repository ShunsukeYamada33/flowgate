from pydantic import BaseModel


class ApplicationsResponse(BaseModel):
    id: str
    status: str
    title: str
    token_type: str = "bearer"

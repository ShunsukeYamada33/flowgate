from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api.endpoints.auth import router

app = FastAPI()

app.include_router(router, prefix="/api/auth")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

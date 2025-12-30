from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api.endpoints.auth import router as auth_router
from app.api.endpoints.app import router as app_router

app = FastAPI()

app.include_router(auth_router, prefix="/api/auth")
app.include_router(app_router, prefix="/api/app")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

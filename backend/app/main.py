from fastapi import FastAPI
from app.core.config import settings
from fastapi.routing import APIRoute
from app.api.main import api_router

def custom_generate_unique_id(route: APIRoute) -> str:
    return f"{route.tags[0]}-{route.name}"

app = FastAPI(
    title="API",
    description="api",
    version="1.0.0",
    openapi_url=f"{settings.PREFIX_ROUTER}/openapi.json",
    generate_unique_id_function=custom_generate_unique_id,
)

@app.get("/", tags=["root"])
def root():
    return {"message": "Welcome to User Management API"}

@app.get("/health", tags=["health"])
def health_check():
    return {"status": "healthy"}


app.include_router(api_router, prefix=settings.PREFIX_ROUTER)

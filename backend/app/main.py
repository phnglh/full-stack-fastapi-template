from fastapi import FastAPI


app = FastAPI(
    title="User Management API",
    description="API để quản lý users",
    version="1.0.0"
)

# Include routers
# app.include_router(users.router, prefix="/api/v1")

@app.get("/")
def root():
    return {"message": "Welcome to User Management API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

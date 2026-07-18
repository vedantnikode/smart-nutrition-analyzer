from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Routers
from routers.foods import router as foods_router
from routers.menu import router as menu_router
from routers.nutrition import router as nutrition_router
from routers.health import router as health_router

app = FastAPI(
    title="Smart Nutrition Analyzer API",
    description="Backend API for Smart Nutrition Analyzer",
    version="1.0.0",
)

# CORS (Allows React frontend to access FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Welcome to Smart Nutrition Analyzer API",
        "status": "Running",
        "docs": "/docs"
    }

# Health check endpoint
@app.get("/ping")
def ping():
    return {"message": "pong"}

# Register Routers
app.include_router(foods_router)
app.include_router(menu_router)
app.include_router(nutrition_router)
app.include_router(health_router)
from pydantic import BaseModel, Field
from typing import List, Literal


class FoodItem(BaseModel):
    id: int = Field(..., description="Food ID")
    quantity: float = Field(..., gt=0, description="Number of servings")


class NutritionRequest(BaseModel):
    gender: Literal["male", "female"]
    foods: List[FoodItem]


class TotalNutrition(BaseModel):
    calories_kcal: float
    protein_g: float
    carbohydrates_g: float
    fat_g: float
    fiber_g: float
    iron_mg: float
    calcium_mg: float
    vitamin_c_mg: float
    potassium_mg: float
    sodium_mg: float


class NutritionResponse(BaseModel):
    total_nutrition: TotalNutrition
    rda_percentage: dict


from typing import Dict

class HealthResponse(BaseModel):
    health_score: int
    grade: str
    nutrient_status: Dict[str, str]
    recommendations: List[str]
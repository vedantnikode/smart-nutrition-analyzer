from fastapi import APIRouter, HTTPException

from schemas import NutritionRequest, NutritionResponse
from utils.calculator import calculate_nutrition

router = APIRouter(
    prefix="/nutrition",
    tags=["Nutrition"]
)


@router.post(
    "/calculate",
    response_model=NutritionResponse
)
def calculate(request: NutritionRequest):
    """
    Calculate nutrition totals and RDA percentages
    for the selected foods.
    """

    try:
        result = calculate_nutrition(
            selected_foods=[
                {
                    "id": food.id,
                    "quantity": food.quantity
                }
                for food in request.foods
            ],
            gender=request.gender
        )

        return result

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Internal Server Error: {str(e)}"
        )
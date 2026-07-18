from fastapi import APIRouter, HTTPException

from schemas import NutritionRequest, HealthResponse
from utils.calculator import calculate_nutrition

router = APIRouter(
    prefix="/health",
    tags=["Health"]
)


@router.post(
    "/score",
    response_model=HealthResponse
)
def health_score(request: NutritionRequest):

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

        percentages = result["rda_percentage"]

        score = 100
        status = {}
        recommendations = []

        for nutrient, percent in percentages.items():

            if percent < 60:

                status[nutrient] = "Low"

                score -= 5

                recommendations.append(
                    f"Increase {nutrient.replace('_', ' ')} intake."
                )

            elif percent > 150:

                status[nutrient] = "High"

                score -= 5

                recommendations.append(
                    f"Reduce {nutrient.replace('_', ' ')} intake."
                )

            else:

                status[nutrient] = "Normal"

        score = max(score, 0)

        if score >= 90:
            grade = "A"

        elif score >= 75:
            grade = "B"

        elif score >= 60:
            grade = "C"

        else:
            grade = "D"

        return {
            "health_score": score,
            "grade": grade,
            "nutrient_status": status,
            "recommendations": recommendations
        }

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
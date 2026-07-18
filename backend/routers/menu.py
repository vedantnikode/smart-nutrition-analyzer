from fastapi import APIRouter, HTTPException
from utils.loader import mess_menu, foods_by_id

router = APIRouter(
    prefix="/menu",
    tags=["Menu"]
)


@router.get("/")
def get_weekly_menu():
    """
    Get the complete weekly mess menu.
    """
    return mess_menu


@router.get("/{day}")
def get_day_menu(day: str):
    """
    Get menu for a specific day.
    """
    day = day.capitalize()

    if day not in mess_menu:
        raise HTTPException(
            status_code=404,
            detail="Day not found"
        )

    return mess_menu[day]


@router.get("/{day}/{meal}")
def get_meal_menu(day: str, meal: str):
    """
    Get complete food details for a meal.
    """

    day = day.capitalize()
    meal = meal.capitalize()

    if day not in mess_menu:
        raise HTTPException(
            status_code=404,
            detail="Day not found"
        )

    if meal not in mess_menu[day]:
        raise HTTPException(
            status_code=404,
            detail="Meal not found"
        )

    food_ids = mess_menu[day][meal]

    return [
        foods_by_id[food_id]
        for food_id in food_ids
        if food_id in foods_by_id
    ]
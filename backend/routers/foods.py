from fastapi import APIRouter, HTTPException, Query
from utils.loader import foods, foods_by_id

router = APIRouter(
    prefix="/foods",
    tags=["Foods"]
)


@router.get("/")
def get_all_foods():
    """
    Get all foods
    """
    return foods


@router.get("/{food_id}")
def get_food(food_id: int):
    """
    Get a single food by ID
    """
    food = foods_by_id.get(food_id)

    if food is None:
        raise HTTPException(
            status_code=404,
            detail="Food not found"
        )

    return food


@router.get("/search/")
def search_foods(
    q: str = Query(..., description="Food name")
):
    """
    Search foods by name
    """

    query = q.lower()

    results = [
        food
        for food in foods
        if query in food["name"].lower()
    ]

    return results
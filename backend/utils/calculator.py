from utils.loader import foods_by_id, rda


NUTRIENTS = [
    "calories_kcal",
    "protein_g",
    "carbohydrates_g",
    "fat_g",
    "fiber_g",
    "iron_mg",
    "calcium_mg",
    "vitamin_c_mg",
    "potassium_mg",
    "sodium_mg"
]


def calculate_nutrition(selected_foods: list, gender: str):
    """
    Calculate total nutrition and RDA percentage.

    selected_foods format:
    [
        {"id": 5, "quantity": 2},
        {"id": 8, "quantity": 1}
    ]
    """

    totals = {
        nutrient: 0.0
        for nutrient in NUTRIENTS
    }

    # Sum nutrition
    for item in selected_foods:

        food = foods_by_id.get(item["id"])

        if not food:
            raise ValueError(f"Food with ID {item['id']} not found.")

        quantity = item["quantity"]

        nutrition = food["nutrition"]

        for nutrient in NUTRIENTS:
            totals[nutrient] += nutrition[nutrient] * quantity

    # Get RDA profile
    profile = rda["profiles"][gender]

    percentages = {}

    for nutrient in NUTRIENTS:

        recommended = profile[nutrient]

        if recommended == 0:
            percentages[nutrient] = 0
        else:
            percentages[nutrient] = round(
                (totals[nutrient] / recommended) * 100,
                2
            )
    # Round totals
    for nutrient in totals:
        totals[nutrient] = round(totals[nutrient], 2)

    return {
        "total_nutrition": totals,
        "rda_percentage": percentages
    }
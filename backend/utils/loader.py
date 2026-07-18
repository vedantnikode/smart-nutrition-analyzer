import json
from pathlib import Path

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"


def load_json(filename: str):
    """
    Load a JSON file from the data folder.
    """
    file_path = DATA_DIR / filename

    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)


# Load all data once
foods = load_json("foods.json")
mess_menu = load_json("mess_menu.json")
meal_categories = load_json("meal_categories.json")
rda = load_json("rda.json")


# Fast lookup dictionary
foods_by_id = {
    food["id"]: food
    for food in foods
}
import json
import random
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

def pick_random(arr):
    return random.choice(arr)

def load_menu():
    menu_path = BASE_DIR / "menu.json"
    with open(menu_path, "r", encoding="utf-8") as f:
        return json.load(f)

def pick_udon(data):
    udon_base = pick_random(data["udon"])
    temp = pick_random(udon_base["temps"])

    # サイズ（weight考慮）
    weighted_sizes = []
    for size in udon_base["sizes"]:
        weighted_sizes.extend([size] * size["weight"])

    size_obj = pick_random(weighted_sizes)

    return {
        "name": f'{udon_base["name"]}（{temp}・{size_obj["size"]}）',
        "price": size_obj["price"],
        "category": "udon"
    }

def fill_sides(data, remaining):
    selected = []

    while True:
        affordable_items = []

        for cat in data["sideCategories"]:
            for item in cat["items"]:
                if item["price"] <= remaining:
                    affordable_items.extend(
                        [{**item, "category": cat["type"]}] * cat["weight"]
                    )

        if not affordable_items:
            break

        picked = pick_random(affordable_items)
        selected.append(picked)
        remaining -= picked["price"]

    return selected

CATEGORY_ORDER = {
    "udon": 0,
    "tempura": 1,
    "gohanmono": 2,
    "topping": 3,
    "udonuts": 4,
}

def run_gacha():
    data = load_menu()

    selected = []
    total = 0
    remaining = 1000

    # ① うどん
    udon = pick_udon(data)
    selected.append(udon)
    total += udon["price"]
    remaining -= udon["price"]

    # ② サイド
    sides = fill_sides(data, remaining)
    for item in sides:
        selected.append(item)
        total += item["price"]
        remaining -= item["price"]

    # 並び替え
    selected.sort(key=lambda x: CATEGORY_ORDER[x["category"]])

    return selected, total, remaining

if __name__ == "__main__":
    selected, total, remaining = run_gacha()

    for item in selected:
        print(f'・{item["name"]}（{item["price"]}円）')

    print(f"合計:{total}円（残り:{remaining}円）")
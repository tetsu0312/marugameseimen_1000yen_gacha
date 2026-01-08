import json
import random
from pathlib import Path

# ==============================
# 定数（JSと一致）
# ==============================
GOD_MESSAGES = [
    "😆✨ 1000円ピッタリ神引き！！✨😆",
    "😇✨ 1000円ジャスト！！✨😇",
    "😆✨ 1000円ちょうど！！✨😆",
]

GACHA_URL = "https://tetsu0312.github.io/marugameseimen_1000yen_gacha/"

BASE_DIR = Path(__file__).resolve().parent.parent

# ==============================
# ユーティリティ
# ==============================
def pick_random(arr):
    return random.choice(arr)

def load_menu():
    menu_path = BASE_DIR / "menu.json"
    with open(menu_path, "r", encoding="utf-8") as f:
        return json.load(f)

# ==============================
# ガチャロジック
# ==============================
def pick_udon(data):
    udon_base = pick_random(data["udon"])
    temp = pick_random(udon_base["temps"])

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

    udon = pick_udon(data)
    selected.append(udon)
    total += udon["price"]
    remaining -= udon["price"]

    sides = fill_sides(data, remaining)
    for item in sides:
        selected.append(item)
        total += item["price"]
        remaining -= item["price"]

    selected.sort(key=lambda x: CATEGORY_ORDER[x["category"]])

    return selected, total, remaining

# ==============================
# X投稿文生成（JS完全再現）
# ==============================
def build_tweet_text(selected, total, remaining):
    result_lines = [
        f"・{item['name']}（{item['price']}円）"
        for item in selected
    ]

    result_text = "\n".join(result_lines)
    summary = f"　合計:{total}円（残り:{remaining}円）"

    is_god = total >= 1000
    god_line = f"\n{pick_random(GOD_MESSAGES)}" if is_god else ""

    tweet_text = f"""
丸亀製麺1000円ガチャ🥢

{result_text}
{summary}{god_line}

👇回してみる
{GACHA_URL}

#丸亀製麺
""".strip()

    return tweet_text

# ==============================
# 動作確認
# ==============================
if __name__ == "__main__":
    print("=== gacha.py 実行されたばい ===")
    selected, total, remaining = run_gacha()
    tweet_text = build_tweet_text(selected, total, remaining)
    print(tweet_text)
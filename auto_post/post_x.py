import os
import tweepy

from gacha import run_gacha, build_tweet_text

def can_post_to_x():
    return all([
        os.getenv("X_API_KEY"),
        os.getenv("X_API_SECRET"),
        os.getenv("X_ACCESS_TOKEN"),
        os.getenv("X_ACCESS_SECRET"),
    ])

def post_to_x(tweet_text: str):
    client = tweepy.Client(
        consumer_key=os.environ["X_API_KEY"],
        consumer_secret=os.environ["X_API_SECRET"],
        access_token=os.environ["X_ACCESS_TOKEN"],
        access_token_secret=os.environ["X_ACCESS_SECRET"],
    )
    client.create_tweet(text=tweet_text)

if __name__ == "__main__":
    selected, total, remaining = run_gacha()
    tweet_text = build_tweet_text(selected, total, remaining)

    print("=== 投稿内容（プレビュー） ===")
    print(tweet_text)
    print("==============================")

    if can_post_to_x():
        post_to_x(tweet_text)
        print("Xに投稿したばい🎉")
    else:
        print("Xキー未設定のため、投稿はスキップしたばい👌")
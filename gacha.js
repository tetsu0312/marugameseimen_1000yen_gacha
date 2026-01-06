// 結果表示前のメッセージパターン
const spinningMessages = [

  // ==============================
  // 汎用・ガチャ演出系
  // ==============================
  "ガチャ回し中…😋",
  "一番良いのを選ぶよ〜🍴",
  "迷いに迷っとる…🌀",
  "今日はこれかも…？🤔",
  "美味しくなる会議中📝",
  "胃袋と相談…😆",
  "ええメニューの予感しかしない✨",
  "そろそろ運命決まりそう…👀",
  "さぁ…結果発表いくよ！🎊🍴",

  // ==============================
  // ワクワク・テンション系
  // ==============================
  "ワクワクしてきた〜🙌✨",
  "テンション上がってきたー！🔥",
  "ワクワクが止まらん〜！🎉",
  "ドキドキ最高潮🤩🎉",
  "テンションぶち上がり中🚀🔥",
  "ワクワク止まらん！💓",
  "ワクワク度、限界突破中😆",
  "今日はいい予感しかしない✨",
  "ドキドキしながら待っとこ😳✨",
  "楽しみすぎてニヤニヤしとる😆",

  // ==============================
  // ごはん・食事全般
  // ==============================
  "お腹すいてきた…🤤",
  "ご飯のこと考えるだけで幸せ🍀",
  "ご飯タイムって幸せの塊よね😋",
  "ご褒美タイム到来🎁",
  "今日は自分にご褒美😆",
  "お腹が喜ぶ準備しとる🤤",
  "何が出るかドキドキ…😳",
  "当たりであれ！🎯✨",
  "今日は絶対いい日になる✨",
  "お腹も心も準備OK🙌",
  "テンション上がってきた！🎉",

  // ==============================
  // ランチ・日常シーン
  // ==============================
  "さぁどれになるんやろ〜😆",
  "テンション上げてこ〜🎉",
  "もうすぐ結果出るけん待ってね〜🐾",
  "楽しみすぎる...！😆🎉",
  "今日は何食べても幸せな日😆🌸",
  "テンション上がってきた🎶",
  "ワクワクしながら待つ時間も好き✨",
  "お腹グーグー鳴ってきた！😋",

  // ==============================
  // うどん・天ぷら・丸亀製麺寄り
  // ==============================
  "今日のうどん楽しみー！😆🍽️",
  "最高のうどんきたーー！🎉",
  "どんなうどんも最高よね🥰",
  "今日も良いうどんになりそう🍴✨",
  "サクサク天ぷら美味しすぎ😆",
  "トッピング選ぶのが最高の瞬間😆",
  "丸亀製麺きただけで最高〜🎶",
  "今日は丸亀製麺の日ってことでよか？😆",
  "丸亀製麺に来た瞬間、もう勝ち✨",
  "ワクワク止まらん😆",
  "何頼むか考える時間が一番楽し〜🎶",
  "丸亀製麺って選んどる時からもう幸せ🍀",
  "今日も期待しかない😋✨",
  "全部正解な気しかしない😆🔥"
];

// ==============================
// 結果タイトル文言パターン
// ==============================
const resultTitles = [
  "今日の運命のメニュー🥢✨",
  "ドキドキの結果出たよ😆✨",
  "キターー！結果はこちら🎉🔥",
  "今日のチョイスはこちら😆🍴",
  "ガチャの結果、出たよ！🎉",
  "ワクワクの結果はこちら〜😆🍽️",
  "ガチャの神、降臨🙏✨",
  "選ばれしメニュー、降臨🥢✨",
  "今日の胃袋が大喜び😆🍜",
  "今日、引き良すぎん？😆✨",
  "もうテンション爆上がり😆🚀",
  "ガチで神😳🔥",
  "結果発表〜😋🎊",
  "結果発表〜😆🎉",

  "今日のベストチョイス✨🍴",
  "ドキドキの答え合わせ🎯😋",
  "ガチャが導いた答え✨",
  "これは当たりやろ〜！🎉🔥",
  "今日の満足コース完成😆🍴",
  "テンションぶち上げ結果🚀✨",

  "今日の気分にピッタリ😆✨",
  "今日の最高チョイス完成🎉🍽️",
  "テンション上がる組み合わせ🔥😋",
  "これは満足間違いなし😆✨",
  "ガチャがええ仕事しとる😎✨",
  "今日のワクワク結果🎉😆",
  "これは超テンション上がる🔥✨",
  "今日めっちゃ良い感じ😆🎯",

  "最高の結果出た😆✨",
  "パーフェクトうどん🎉🍴",
  "これは期待してよか😋🔥",
  "今日のチョイス、大正解😆💯",
  "うまい予感しかしない😋✨",
  "ガチャの答えはこれでしょ😆✨",
  "今日の楽しみ決まった🎊🍴",

  "今日はツイてる日！😆✨",
  "これは気分アガるやつ！🔥🍴",
  "今日のご褒美、確定🎉😋",
  "一気に元気出る〜！💪✨",
  "テンション最高潮😆🔥",
  "めっちゃハッピー🎊😆",
  "幸せメーター満タン😋🍀",
  "今日も気分ノリノリ😆🎶",
  "なんかもう勝った気がする🔥😎",
  "今日の運、全部ここに来とる✨🎯",
  "これは笑顔になるやつ😊🍜",
  "元気スイッチ入る💥😆",
  "何もかも上手くいく気がする😂🎊",
  "今日はこれで決まり！😆🎊",
  "今回の正解はこちらー！😆",
  "ガチャの結果は…これっ！😋✨",

  "丸亀製麺で優勝😋✨",
  "丸亀製麺、間違いないやつ出た🔥",
  "丸亀製麺でワクワク確定🎊",
  "丸亀製麺最強すぎ😎",
  "今日の丸亀製麺も当たり🎯",
  "丸亀製麺、ワクワク止まらん😆✨",
  "丸亀製麺ガチャ成功🎲✨",
  "丸亀製麺、今日の正解これ！😆",
  "丸亀製麺で幸せ確定🍜💖",
  "丸亀製麺、期待しかない🔥",
  "丸亀製麺、今日も強い😎🍴",

"今日のうどん、これが正解！🍜",
"うどん選び、成功！🎯",
"今日もうどんが美味しい😎✨",
"うどん気分ど真ん中🍜",
"うどんで幸せチャージ😋",
"今日はうどん日和🍜",
"うどん欲、しっかり満たされる😋",
"このうどん、間違いない！🔥",
"うどんタイム開幕🥢✨",
"うどんで元気チャージ💪🍜"
];

// ==============================
// 1000円ピッタリメッセージ
// ==============================
const godMessages = [
  "😆✨ 1000円ピッタリ神引き！！✨😆",
  "😇✨ 1000円ジャスト！！✨😇",
  "😆✨ 1000円ちょうど！！✨😆",
];

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("gachaBtn");
  const resultEl = document.getElementById("result");
  const spinningEl = document.getElementById("spinning");

  // ==============================
  // ユーティリティ
  // ==============================
  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // ==============================
  // Xにポスト設定
  // ==============================
  const postXBtn = document.getElementById("postXBtn");

function setupXPost(title, resultText, isGod){
  if (!postXBtn) return;

    const godLine = isGod
    ? `${pickRandom(godMessages)}`
    : "";
  
  const tweetText = `
丸亀製麺1000円ガチャ回してみた🥢

${title}
${resultText}
${godLine}
👇ガチャ
https://tetsu0312.github.io/marugameseimen_1000yen_gacha/

#丸亀製麺 #丸亀製麺1000円ガチャ
  `.trim();

  const url =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(tweetText);

  postXBtn.style.display = "block";
  postXBtn.onclick = () => {
    window.open(url, "_blank");
  };
}

  
  // weight付きカテゴリ抽選
  const pickWeightedCategory = (categories) => {
    const pool = [];
    categories.forEach(cat => {
      for (let i = 0; i < cat.weight; i++) {
        pool.push(cat);
      }
    });
    return pickRandom(pool);
  };

  btn.addEventListener("click", async () => {
    btn.disabled = true;

    // ==============================
    // 表示リセット
    // ==============================
    resultEl.classList.remove("show");
    resultEl.innerHTML = "";
    spinningEl.classList.remove("show");

    if (postXBtn) {
    postXBtn.style.display = "none";
    }

    // スピン中メッセージ
    spinningEl.textContent = pickRandom(spinningMessages);
    requestAnimationFrame(() => spinningEl.classList.add("show"));

    // 1.6秒待つ
    await new Promise(resolve => setTimeout(resolve, 1600));
    spinningEl.classList.remove("show");

    // ==============================
    // データ取得
    // ==============================
    const res = await fetch("menu.json");
    const data = await res.json();

    let total = 0;
    let remaining = 1000;
    const selected = [];

    // ==============================
    // ① うどんは必ず1品
    // ==============================
    const udonBase = pickRandom(data.udon);

    // 温 or 冷
    const temp = pickRandom(udonBase.temps);

    // サイズ（weight付き）
    const weightedSizes = [];
    udonBase.sizes.forEach(size => {
      for (let i = 0; i < size.weight; i++) {
        weightedSizes.push(size);
      }
    });
    const sizeObj = pickRandom(weightedSizes);

    const udonItem = {
      name: `${udonBase.name}（${temp}・${sizeObj.size}）`,
      price: sizeObj.price,
      category: "udon"
    };

    selected.push(udonItem);
    total += udonItem.price;
    remaining -= udonItem.price;

    // ==============================
    // ② サイドを付けるか？（95%）
    // ==============================
    const shouldAddSide = Math.random() < 0.95;

    if (shouldAddSide && remaining > 0) {

      while (true) {
  // 残金で買える商品だけを集める
  const affordableItems = [];

  data.sideCategories.forEach(cat => {
    cat.items.forEach(item => {
      if (item.price <= remaining) {
        affordableItems.push({
          ...item,
          category: cat.type,
          weight: cat.weight
        });
      }
    });
  });

  // もう何も買えんときは終了
  if (affordableItems.length === 0) break;

  // weight考慮して抽選
  const weightedPool = [];
  affordableItems.forEach(item => {
    for (let i = 0; i < item.weight; i++) {
      weightedPool.push(item);
    }
  });

  const picked = pickRandom(weightedPool);

  selected.push(picked);
  total += picked.price;
  remaining -= picked.price;
}
    }

    // ==============================
    // 結果表示
    // ==============================
    const listHtml = selected
      .map(item => `<li>${item.name}（${item.price}円）</li>`)
      .join("");

    const title = pickRandom(resultTitles);
    // 1000円ピッタリなら大当たりメッセージ表示
    const isGod = total >= 1000;
    const godHtml = isGod
    ? `<p class="god-message">${pickRandom(godMessages)}</p>`
    : "";

    resultEl.innerHTML = `
      <h2 class="result-title">${title}</h2>
      <ul class="result-list">
        ${listHtml}
      </ul>
      <p class="result-summary">
        合計:${total}円（残り:${1000 - total}円）
      </p>
      ${godHtml}
    `;

    // ==============================
    // X用 結果テキスト生成
    // ==============================
const resultLines = selected.map(
  item => `・${item.name}（${item.price}円）`
);

const resultText = `
${resultLines.join("\n")}
　合計:${total}円（残り:${1000 - total}円）
`.trim();

setupXPost(title, resultText, isGod);

    resultEl.classList.add("show");
    btn.disabled = false;

  });
});

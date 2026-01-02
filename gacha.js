document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("gachaBtn");
  const resultEl = document.getElementById("result");

  btn.addEventListener("click", async () => {
    btn.disabled = true;
    resultEl.classList.remove("show");
    resultEl.innerHTML = "";

    const res = await fetch("menu.json");
    const data = await res.json();

    let total = 0;
    let selected = [];

    // ===== ① うどんは必ず1品 =====
    const udon =
      data.udon[Math.floor(Math.random() * data.udon.length)];
    selected.push(udon);
    total += udon.price;

    let remaining = 1000 - total;

    // ===== ② 天ぷらを追加 =====
    const shuffledTempura = [...data.tempura].sort(
      () => Math.random() - 0.5
    );

    for (const item of shuffledTempura) {
      if (item.price <= remaining) {
        selected.push(item);
        remaining -= item.price;
        total += item.price;
      }
    }

    // ===== ③ その他サイド =====
    const shuffledSide = [...data.side].sort(
      () => Math.random() - 0.5
    );

    for (const item of shuffledSide) {
      if (item.price <= remaining) {
        selected.push(item);
        remaining -= item.price;
        total += item.price;
      }
    }

    // ===== 表示 =====
    const listHtml = selected
      .map(
        item => `<li>${item.name}（${item.price}円）</li>`
      )
      .join("");

    resultEl.innerHTML = `
      <h2 id="shop">今回の1000円ガチャ🥢</h2>
      <ul>${listHtml}</ul>
      <p id="comment">合計：${total}円（残り ${1000 - total}円）</p>
    `;

    resultEl.classList.add("show");
    btn.disabled = false;
  });
});

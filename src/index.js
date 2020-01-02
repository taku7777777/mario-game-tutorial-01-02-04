// js の処理が開始されたことを確認するためのもの
alert("start js alert");
console.log("start js console");

// ロード時に処理が実行されるようにする
console.log("start define addEventListener");
window.addEventListener("load", update);
console.log("end define addEventListener");

// update処理が実行された回数を記録するためのもの
console.log("start define cnt");
var cnt = 1;
console.log("end define cnt");

// ロード時に実行する関数の定義
console.log("start define update");
function update() {
  console.log("start update function, cnt = " + cnt);

  // 回数を1つ増やす
  cnt = cnt + 1;

  // 繰り返し処理を実行するよの定義
  window.requestAnimationFrame(update);
  console.log("end update function, cnt = " + cnt);
}
console.log("end define update");

const keyakiFesStartTime = new Date(2023, 7, 9, 9, 00, 00); //仮の日程

function countDown() {
  const now = new Date();
  const differ = (keyakiFesStartTime.getTime() - now.getTime()) / 1000;
  const day = Math.floor(differ / 60 / 60 / 24);
  const hour = Math.floor((differ / 60 / 60) % 24);
  const min = Math.floor((differ / 60) % 60);
  const sec = Math.floor(differ % 60);

  const message = day + "日" + hour + "時間" + min + "分" + sec + "秒";
  console.log(message);
  document.getElementById("time").textContent = message;
}
setInterval("countDown()", 1000);

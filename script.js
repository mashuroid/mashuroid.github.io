// Cookieから訪問回数を取得
function getVisitCount() {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'visitCount') {
      return parseInt(value) || 0;
    }
  }
  return 0;
}

// 訪問回数をCookieに保存
function setVisitCount(count) {
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);
  document.cookie = `visitCount=${count}; expires=${expiryDate.toUTCString()}; path=/`;
}

// ページロード時に訪問回数を更新・表示
document.addEventListener('DOMContentLoaded', function() {
  let count = getVisitCount();
  count++;
  setVisitCount(count);
  
  const countElement = document.getElementById('count');
  if (countElement) {
    let message;
    if (count >= 10) {
      message = `あなたは${count}回このサイトを見ました。<br>いっぱい見てくれてありがとう！`;
    } else {
      message = `あなたは${count}回このサイトを見ました。<br>当たってる？`;
    }
    countElement.innerHTML = message;
  }
});

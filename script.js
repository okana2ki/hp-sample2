/* 
   script.js: ウェブページに「動き」を加えるためのファイルです。
   ユーザーの操作（クリックや入力）に反応するプログラムを書きます。
*/

// 1. ボタンをクリックすると数が増える機能
let count = 0;
const button = document.getElementById('click-me-btn');
const counterText = document.getElementById('counter-text');

button.addEventListener('click', function() {
    count = count + 1;
    counterText.innerText = 'クリック数: ' + count;
    
    // おまけ：5回クリックしたら色を変える
    if (count >= 5) {
        counterText.style.color = 'red';
        counterText.style.fontWeight = 'bold';
    }
});

// 2. 入力した名前に合わせて挨拶が変わる機能
const nameInput = document.getElementById('name-input');
const greetingText = document.getElementById('greeting-text');

nameInput.addEventListener('input', function(event) {
    const name = event.target.value;
    
    if (name.length > 0) {
        greetingText.innerText = 'こんにちは、' + name + 'さん！';
    } else {
        greetingText.innerText = 'ここに挨拶が表示されます';
    }
});

// コンソールにメッセージを表示（デバッグ用：F12で見れます）
console.log('JavaScriptファイルが正しく読み込まれました！');

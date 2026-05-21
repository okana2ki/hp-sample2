/* 
   script.js: ウェブページに「動き」を加えるためのファイルです。
   ユーザーの操作（クリックや入力）に反応するプログラムを書きます。
*/

/* =========================================
   1. ボタンをクリックすると数が増える機能
   ========================================= */

/* 
   let count = 0: 
   クリック数を保存する変数。最初は 0 です。
   ボタンがクリックされるたびに、この値が 1 ずつ増えます。
*/
let count = 0;

/* 
   document.getElementById('click-me-btn'):
   HTML 内で id="click-me-btn" の要素を探して取得します。
   const を使って変更できない変数に保存しています。
*/
const button = document.getElementById('click-me-btn');
const counterText = document.getElementById('counter-text');

/* 
   button.addEventListener('click', function() { ... }):
   ボタンがクリックされた時に実行される処理を定義します。
   ユーザーの操作に「反応」する仕組みです。
*/
button.addEventListener('click', function() {
    /* クリック数を 1 増やす */
    count = count + 1;
    
    /* 
       counterText.innerText = '...' :
       HTML に表示されているテキストを変更します。
       ここでクリック数を表示しています。
    */
    counterText.innerText = 'クリック数: ' + count;
    
    /* 
       おまけ：5回以上クリックしたら色を変える
       if 文で条件判定しています。
       count が 5 以上なら、以下の処理を実行します。
    */
    if (count >= 5) {
        /* テキストを赤色にして、太くします */
        counterText.style.color = 'red';
        counterText.style.fontWeight = 'bold';
    }
});

/* =========================================
   2. 入力した名前に合わせて挨拶が変わる機能
   ========================================= */

const nameInput = document.getElementById('name-input');
const greetingText = document.getElementById('greeting-text');

/* 
   nameInput.addEventListener('input', function(event) { ... }):
   テキスト入力欄に何か入力されるたびに実行される処理です。
   'change' ではなく 'input' を使うことで、リアルタイムに反応します。
*/
nameInput.addEventListener('input', function(event) {
    /* 
       event.target.value:
       入力欄に現在入力されているテキストを取得します。
       event は、何が起きたかを表すオブジェクトです。
    */
    const name = event.target.value.trim(); /* .trim() で前後の空白を削除 */
    
    /* 
       if 文で入力内容をチェック：
       入力欄の内容に応じて、異なる動作をします。
    */
    if (name.length === 0) {
        /* 
           何も入力されていない場合：
           初期メッセージを表示します。
        */
        greetingText.innerText = 'ここに挨拶が表示されます';
        greetingText.style.color = '#666';
    } else if (name.length > 50) {
        /* 
           50文字を超えた場合：
           エラーメッセージを表示します。
           初心者ユーザーに「何か問題がある」ことを伝えます。
        */
        greetingText.innerText = '名前は50文字以内で入力してください';
        greetingText.style.color = '#dc2626'; /* 赤色でエラーを強調 */
    } else {
        /* 
           正常な入力の場合：
           入力した名前を含めた挨拶を表示します。
        */
        greetingText.innerText = 'こんにちは、' + name + 'さん！';
        greetingText.style.color = '#059669'; /* 緑色で成功を表現 */
    }
});

/* 
   ボタンにキーボード対応を追加：
   Enter キーでもボタンクリックと同じ動作をするようにします。
   アクセシビリティを向上させます。
*/
button.addEventListener('keydown', function(event) {
    /* 
       event.key === 'Enter':
       Enter キーが押された場合を判定します。
    */
    if (event.key === 'Enter') {
        /* 
           ボタンクリックと同じ動作をさせる：
           button.click() でボタンがクリックされたのと同じ処理を実行します。
        */
        button.click();
    }
});

/* 
   コンソールにメッセージを表示（デバッグ用）：
   F12 キーで開発者ツールを開くと、
   コンソール（Console）タブでこのメッセージが見えます。
   ページが正しく読み込まれているかの確認に使います。
*/
console.log('JavaScriptファイルが正しく読み込まれました！');

/* =========================================
   3. ページ読み込み完了時の処理（オプション）
   ========================================= */

/* 
   document.addEventListener('DOMContentLoaded', function() { ... }):
   HTML がすべて読み込まれた後に実行される処理です。
   ページの初期化処理に使います。
*/
document.addEventListener('DOMContentLoaded', function() {
    /* 
       このタイミングでスクリプトの初期化をすることで、
       HTML の要素がすべて読み込まれていることが保証されます。
    */
    console.log('ページの読み込みが完了しました。すべての機能が使用できます。');
});

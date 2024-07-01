// output-btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');
 
// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
    // テキストの文字列を取得する
    const displayText = document.getElementById('text')

    //文字列を書き換える
    displayText.textContent = "ボタンをクリックしました"

});
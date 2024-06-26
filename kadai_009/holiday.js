// 配列/変数宣言と値の代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
let i; //ループ用変数


// 配列の値を出力する
console.log(holidays);
 
//for文
console.log("for文による出力");
for (i = 0; i <= 15; i++) {
    console.log(holidays[i]);
}

//変数初期化
i = 0;

//while文
console.log("while文による出力");

while (holidays[i] !== undefined) {
    console.log(holidays[i]);

    // //動作確認用
    // if (i == 1000) {
    //     console.log("ループしているため処理を強制終了");
    //     break;
    // }

    i ++;
}

// //動作確認用
// console.log("処理終了");
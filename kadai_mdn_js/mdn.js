const getCurrentDate = () => {
    // 現在の日時を取得
    let date = new Date();

    // 年、月、日をオブジェクトに格納
    const todayDate = {year: date.getFullYear(), month:date.getMonth()+1, day:date.getDate()};

    console.log(todayDate.year + "年" + todayDate.month + "月" + todayDate.day + "日" )
}

getCurrentDate();
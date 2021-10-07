let read =()=> {
  let ssURL = 'https://docs.google.com/spreadsheets/d/1HoJgsWaUGSv79RbHWAyIUvf082WR963a8HrIvH9rL1o/edit#gid=0';
  ssURL = ssURL.split('/');
  if( ssURL[3] ===  'spreadsheets' ){
    Logger.log('スプレッドシートのURLです');
    let ssKey = SpreadsheetApp.openById(ssURL[5]).getSheetByName('シート1');
    let sel = ssKey.getDataRange();
    let values = sel.getValues();

    //1行目スキップ
    for (let i = 1; i < values.length; i++) {
    // 行ごとの値を格納する変数を初期化
    let row = "";
    // 多次元配列*ループ
      for (let j = 0; j < values[i].length; j++) {
      // 値が存在する場合
      if (values[i][j]) {
      // 値を格納
      row = row + values[i][j];
      }
      // カンマを付与
      row = row + ",";
      }
    Logger.log(row);
    }

  }else{
    Logger.log('スプレッドシートのURLとして読み込めませんでした。URL先頭がhttps://docs.google.com/spreadsheetsになっていることを確認してください');
  }
}

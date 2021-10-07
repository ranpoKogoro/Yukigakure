const read =()=> {
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
    let row = '';
    // 多次元配列*ループ
      for (let j = 0; j < values[i].length; j++) {
        // 値が存在する場合
        if (values[i][j]) {
        // 値を格納
          row = row + values[i][j];
        }
        // カンマを付与
        row = row + ',';
      }
      row = row.split(',');
      
      let data = {
      'id': row[0],
      'pass': row[1],
      'dest': row[2],
      'sms_text': row[3],
      'key': 'fixfixfix'
      };
   
      let options = {
        'method' : 'post',
        'contentType': 'application/json',
        'payload' : JSON.stringify(data),
      };
      console.log(options);

    }

  }else{
    Logger.log('スプレッドシートのURLとして読み込めませんでした。URL先頭がhttps://docs.google.com/spreadsheetsになっていることを確認してください');
  }
console.log('1');
  var book = {
  'title': 'すべてがFになる',
  'comment': 'ドキドキして面白かった'
};
console.log('1.5');
var options = {
  'method' : 'post',
  'contentType': 'application/json',
  'payload' : JSON.stringify(book),
  'muteHttpExceptions' : true
};
try{
  var response = UrlFetchApp.fetch('https://script.google.com/macros/s/AKfycbxekgmrO_NlA7xvDMrxnsOmZCwppU-eOkBtXBzGsriVmVPJon0l73n03AOUu_a8KGfL/exec', options);
  response = response.getContentText();
  console.log(response);
  }catch(err){
        Logger.log('Error:');
    Logger.log(err);
  }
  console.log('2');
}

const doPost =(e)=> {
  e = { id : '11922960'};
  var content = JSON.stringify(e);
  var output = ContentService.createTextOutput(content);
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

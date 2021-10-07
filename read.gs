let read =()=> {
  let ssURL = 'https://docs.google.com/spreadsheets/d/1HoJgsWaUGSv79RbHWAyIUvf082WR963a8HrIvH9rL1o/edit#gid=0';
  ssURL = ssURL.split('/');
  if( ssURL[3] ===  'spreadsheets' ){
    Logger.log('スプレッドシートのURLです');
    Logger.log(ssURL[5]);
    let ssKey = SpreadsheetApp.openById(ssURL[5]).getSheetByName('シート1');
    let sel = ssKey.getRange('A2');
    Logger.log(sel.getValue());
  }else{
    Logger.log('スプレッドシートのURLとして読み込めませんでした。URL先頭がhttps://docs.google.com/spreadsheetsになっていることを確認してください');
  }
}

const doGet =()=> {
    const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
    console.log('おはよう');
  return htmlOutput;
}

function doPost(res){
  res += 111;
  return res;
}

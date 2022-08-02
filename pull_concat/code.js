function pull_concat()
{
  var wholeData = []
  
  var data_ss1 = SpreadsheetApp.openById('xxx')
  var data_ss1_sheet = data_ss1.getSheetByName('xxx')
  var data_ss1Val = data_ss1_sheet.getDataRange().getValues()
  
  var data_ss2 = SpreadsheetApp.openById('xxx')
  var data_ss2_sheet = data_ss2.getSheetByName('xxx')
  var data_ss2Val = data_ss2_sheet.getDataRange().getValues()
  
  var landingSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  landingSheet.clear()
  
  wholeData = wholeData.concat(data_ss1Val, data_ss2Val)
  landingSheet.getRange(1, 1, wholeData.length, wholeData[0].length).setValues(wholeData)
}

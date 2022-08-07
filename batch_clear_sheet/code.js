function clearTempLogs()
{
  var tracking_sheet = SpreadsheetApp.openById('xxxxxxxx')
  var date = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd")
  var trackingVal = []

  var id_form = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('🆔  User ID')
  var ids = id_form.getRange("C2:C").getValues()

  tracking_sheet.insertSheet().setName(date)
  var new_sheet = tracking_sheet.getSheetByName(date)

  for (i = 0; i < ids.length; i++)
  {
    Logger.log(ids[i])
    var dataRange = SpreadsheetApp.openById(ids[i]).getSheetByName('TempLogs').getRange("A2:R100").getDisplayValues()
    trackingVal = trackingVal.concat(dataRange)

    new_sheet.getRange(1, 1, trackingVal.length, trackingVal[0].length).setValues(trackingVal)
    new_sheet.getDataRange().removeDuplicates()
  }

  for (j = 0; j < ids.length - 3; j++)
  {
    Logger.log(ids[j])
    SpreadsheetApp.openById(ids[j]).getSheetByName('TempLogs').getRange("A2:R100").clear()
  }
}

function batch_conditional_deletion()
{
  const ss = SpreadsheetApp.openById('xxx').getSheetByName('RAW')

  var ssRangeVals = ss.getRange(1, 1, ss.getLastRow(), ss.getLastColumn()).getValues()
  var ssNewVals = []

  var col = 0  // 0 is Column A, 1 is Column B ...
  var condition = "ValueToDelete"


  for (i = 0; i < ssRangeVals.length; i++)
  {
    if (ssRangeVals[i][col] !== condition)
    {
      ssNewVals.push(ssRangeVals[i]) 
    }
  }

  var newRange = ss.getRange(1, 1, ssNewVals.length, ssNewVals[0].length)

  ss.clear()
  newRange.setValues(ssNewVals)
}

Logger.log("Clear and reset to remove i18n...")
  {
    var first_ss_rangeVals = ss.getRange(1, 1, ss.getLastRow(), 48).getValues()
    var first_ss_newRangeVals = []

    for (i = 0; i < first_ss_rangeVals.length; i++)
    {
      if (first_ss_rangeVals[i][team_col] !== "i18n")
      {
        first_ss_newRangeVals.push(first_ss_rangeVals[i])
      }
    }
    ss.clear()
    var first_newRange = ss.getRange(1, 1, first_ss_newRangeVals.length, first_ss_newRangeVals[0].length)
    first_newRange.setValues(first_ss_newRangeVals)
    SpreadsheetApp.flush()
  }

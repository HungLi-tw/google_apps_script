function send_notif_mail()
{
  var main = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Main")
  var matchVal = main.getRange("A2").getValue()
  var condition = 80
  
  var draft = DocumentApp.openById('xxxxxx')
  var subject = "[Action Required] xxxxx, xxxxxxxxx."
  var text = draft.getBody().getText()
  
  if (matchVal == condition)
  {
    var date = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd")
    var issue_id = main.getRange("A3").getValue()
    var comment = main.getRange("B36").getValue()
    var alias = main.getRange("B3").getValue()
 
    var replacedText =
        text.replace('{Date}', date)
            .replace('{ID}', issue_id)
            .replace('{Comment}', comment)

    MailApp.sendEmail
    (
      alias, 
      subject + " (" + issue_id + ")",
      replacedText,
      {htmlBody: replacedText, noReply: true}
    )
    
    Logger.log("Mail sent!")
  }
}

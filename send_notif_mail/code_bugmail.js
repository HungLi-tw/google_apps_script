function bug_mails()
{
  var bug_form = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('🐞  Bug Form')
  var draft = DocumentApp.openById('xxxxxxxxxx')
  var body = draft.getBody().getText()

  for (i = 2; i <= bug_form.getLastRow(); i++)
  {
    if (bug_form.getRange(i, 11).getDisplayValue() !== "✉️"
     && bug_form.getRange(i, 1).getDisplayValue() !== "")
    {
      var timestamp = bug_form.getRange(i, 1).getDisplayValue()
      var email_address = bug_form.getRange(i, 2).getValue()
      var issue_title = bug_form.getRange(i, 3).getValue()
      var issue_desc = bug_form.getRange(i, 4).getValue()
      var issue_id = bug_form.getRange(i, 6).getValue()
      var issue_status = bug_form.getRange(i, 8).getValue()
      var issue_diagnosis = bug_form.getRange(i, 9).getDisplayValue()
      var issue_actions = bug_form.getRange(i, 10).getDisplayValue()
      
      var subject = issue_id + ": " + issue_title
      var replacedText = body.replace('{issue_timestamp}', timestamp)
                             .replace('{issue_id}', issue_id)
                             .replace('{issue_title}', issue_title)
                             .replace('{issue_description}', issue_desc)
                             .replace('{issue_diagnosis}', issue_diagnosis)
                             .replace('{issue_actions}', issue_actions)
                             .replace('{issue_status}', issue_status)

      MailApp.sendEmail
      (
        email_address,
        subject,
        replacedText,
        {htmlBody: replacedText}
      )
      bug_form.getRange(i, 11).setValue("✉️")
    }
  }
}

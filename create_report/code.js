function create_report()
{
  var report_date = SpreadsheetApp.openById('xxx').getSheetByName('ReportingPage').getRange("B2").getDisplayValue()
  var doc_title = "Weekly Report: " + report_date
  var template_id = "xxx"
  var folder_id = "xxx"

  var file = DriveApp.getFileById(template_id)
  var folder = DriveApp.getFolderById(folder_id)
  var new_file = file.makeCopy(doc_title)
  folder.addFile(file)

  var new_file_url = new_file.getUrl()

  var body = DocumentApp.openById(file.getId()).getBody()
  body.replaceText("{report_week}", report_date)

  MailApp.sendEmail
  (
    {
      to: "xxx@gmail.com, xxx@gmail.com, ...",
      subject: "Weekly Report: " + report_date + "is ready!", 
      htmlBody: " \n\
      <p>Hi Team, </p> \n\
      <p>The weekly report for " + report_date + "is ready! \n\
         Please click the <a href= '" + new_file_url + "'>link</a>&nbsp;here to ... </p> \n\
      <p>Cheers,&nbsp;</p> \n\
      <p>Hung</p> \n\
      "
    }
  )
}

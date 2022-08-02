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
  var hoo_data_url = "https://docs.google.com/spreadsheets/d/1UQ9WjaL32FUm6gvGXofsfV17diq--GE--0thTIft-RQ/"
  var tigercub_data_url = "https://docs.google.com/spreadsheets/d/1Wjz29Jwz5OEYlusaTxMc5IyXu7UvPE_Dgp2pZkfvFvQ/"
  var bs_non_en_url = "https://docs.google.com/spreadsheets/d/1X67DYArDUHuiRIzx3GX1kHu0ou2_8C20L_4azhPV8Ic/"
  var bs_en_url = "https://docs.google.com/spreadsheets/d/1wc0w_pxwLdQGpBRW_HkbnJL1j3B7C2o09ZSJ7t5e1ag/"

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

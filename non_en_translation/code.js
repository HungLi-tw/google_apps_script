function translation_a()
{
  var locale = main.getRange("B3").getDisplayValue()
  if (main.getRange('A8').getValue() == 'Questions')
  {
    for (b = 0; b <= 10; b++)
    {
      if (locale == "en-AU" || locale == "en-GB" || locale == "en-US")
      {
        main.getRange("B8").setValue("The content is already in English. ")
      }
      else
      {
        var translated_1 = LanguageApp.translate(first_array[b], locale, 'en')
        main.getRange(8 + b, 2).setValue(translated_1)
        SpreadsheetApp.flush()
      }
    }
  }
}

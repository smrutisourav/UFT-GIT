'**************************************************            Login                     ********************************************************************
'Call QCObjects("\\10.20.191.63\Automation\Atiqa\SAP\RESULT","\\10.20.191.63\Automation\Atiqa\SAP\FINANCE\Maintain GL Account Master Data.xlsx",1,1)
'Call QCObjects("\\10.20.191.63\Automation\GEMS\Core Regression\Test Scripts\FICO\RegressionResults_17thJan","\\10.20.191.63\Automation\Atiqa\SAP\FINANCE\Maintain GL Account Master Data.xlsx",1,1)
Call QCObjects("C:\Smruti Sourav\Output\GEMS","C:\Smruti Sourav\GEMS SAP\Maintain GL Account Master Data.xlsx",1,1)
Call LaunchSAPConnection("C:\Program Files\SAP\FrontEnd\SAPgui\saplogon.exe","GEMS QAT")
Call Login("ID_Username","ID_Pwd")
Call SetTextbox("RSYST-MANDT","300")
Call PressEnter()
Call SelectRadioButtonIfPopupExists("MULTI_LOGON_OPT2","Continue with this logon, without ending any other logons in system")
Call PressEnter()

'************************************************** T-Code  FSP0 **********************************************
Call SetTcode("FSP0")
Call PressEnter()

'#### Display GL account master data before change ####
Call SetTextbox("GLACCOUNT_SCREEN_KEY-SAKNR","ID_GLAcc")
 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
Call SetTextbox("GLACCOUNT_SCREEN_KEY-KTOPL","ID_CompanyCode")
Call PressEnter()
Call CaptureSAPGuiWindow()

'#### Change GL account master data ####
Call ClickButton("Change")
Call SetTextbox("GLACCOUNT_SCREEN_COA-TXT50_ML","ID_LongText")
Call CaptureSAPGuiWindow()
Call ClickButton("Save   \(Ctrl\+S\)")

'Call ClickButton("Continue   \(Enter\)")


'#### Display GL account master data after change ####
Call SelectMenuBar("G/L account;Display")

'#### Block GL account master data ####
Call ClickButton("Block")
Call SelectCheckbox("GLACCOUNT_SCREEN_COA-XSPEA","ON")
Call SelectCheckbox("GLACCOUNT_SCREEN_COA-XSPEB","ON")
Call SelectCheckbox("GLACCOUNT_SCREEN_COA-XSPEP","ON")
Call CaptureSAPGuiWindow()
Call ClickButton("Save   \(Ctrl\+S\)")
Call ClickButton("Continue   \(Enter\)")
'#### Delete GL account master data ####
Call ClickButton("Mark for deletion")
Call SelectCheckbox("GLACCOUNT_SCREEN_COA-XLOEV","ON")
Call CaptureSAPGuiWindow()
Call ClickButton("Save   \(Ctrl\+S\)")
Call ClickButton("Continue   \(Enter\)")

'************************************************** T-Code  FSS0  ********************************************
Call SetTcode("FSS0")
Call PressEnter()

'#### Display GL account master data before change ####
Call SetTextbox("GLACCOUNT_SCREEN_KEY-SAKNR","ID_GLAccount")
Call SetTextbox("GLACCOUNT_SCREEN_KEY-BUKRS","ID_CompCode")
Call CaptureSAPGuiWindow()
Call PressEnter()

'#### Change GL account master data ####
Call ClickButton("Change")
Call SetTextbox("GLACCOUNT_SCREEN_CCODE-WAERS","ID_AccCurrency")
Call CaptureSAPGuiWindow()
Call ClickButton("Save   \(Ctrl\+S\)")

'#### Display GL account master data after change ####
Call ClickButton("Display")

'#### Block GL account master data ####
Call ClickButton("Block")
Call ClickButton("Continue   \(Enter\)")
Call SelectCheckbox("GLACCOUNT_SCREEN_CCODE-XSPEB","ON")
Call CaptureSAPGuiWindow()
Call ClickButton("Save   \(Ctrl\+S\)")

'#### Delete GL account master data ####
Call ClickButton("Mark for deletion")
Call SelectCheckbox("GLACCOUNT_SCREEN_CCODE-XLOEB","ON")
Call CaptureSAPGuiWindow()
Call ClickButton("Save   \(Ctrl\+S\)")

Call logoff()

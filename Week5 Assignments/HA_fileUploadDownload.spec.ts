import {test,expect} from '@playwright/test'
import path from "path"
test('Uploading file withoir input tag',async({page})=>{

    page.goto("https://the-internet.herokuapp.com/upload")
    //UPLOAD
    //With input tag
    const uploadBtn=page.locator("//input[@type='file' and @id='file-upload']")
    await uploadBtn.setInputFiles(path.join(__dirname,'../../Data/Playwright Alerts.pdf'))
    await page.waitForTimeout(3000)

    //Without input tag
    const fupload=page.waitForEvent("filechooser")
    await page.locator("//div[@id='drag-drop-upload']").click()
    const fileUpload=await fupload
    await fileUpload.setFiles(path.join(__dirname,'../../Data/testLeafLogo.jpeg'))
    await page.waitForTimeout(3000)
    const downloadedFileName=await page.locator("(//div[contains(@class,'filename')])[1]/span").textContent()
    expect(downloadedFileName).toBe('testLeafLogo.jpeg')
})
 //DOWNLOAD
    
 test.only("Downloading files",async({page})=> {
  
    await page.goto("https://the-internet.herokuapp.com/download")
    const [download]=await Promise.all([page.waitForEvent('download'),page.getByRole('link',{name:'sample.txt'}).click()])
    await download.saveAs(path.join(__dirname,`../../Data/${download.suggestedFilename()}`))

 })




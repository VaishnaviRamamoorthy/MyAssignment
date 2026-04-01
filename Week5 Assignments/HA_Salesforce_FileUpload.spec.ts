import {test,expect} from '@playwright/test'
import path from 'node:path'
test.use({permissions:['geolocation']})
test.setTimeout(120000)
test('Working on Salesforce App',async({page})=>
{

    await page.goto("https://login.salesforce.com/")
    await page.getByRole('textbox',{name:'Username'}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole('textbox',{name:'Password'}).fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(10000)
    await page.waitForLoadState('domcontentloaded')
    expect(page.url()).toContain("home")
    await page.getByRole('button',{name:"App Launcher"}).click()
    await page.getByRole('button',{name:"View All Applications"}).click()
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(4000)
    await page.getByPlaceholder("Search apps or items...").fill("Accounts")
   
    await page.waitForTimeout(4000)
    //await page.waitForSelector('mark')
    const accountLink=page.locator("//mark[text()='Accounts']")
    if(await accountLink.isVisible()==true)
    {
        await accountLink.click()
        await page.waitForTimeout(6000)
    }
    else{
         await page.getByRole('button',{name:"Cancel and close"}).click()
         await page.getByRole('button',{name:"App Launcher"}).click()
    await page.getByRole('button',{name:"View All Applications"}).click()
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(4000)
    await page.getByPlaceholder("Search apps or items...").fill("Accounts")
   
    await page.waitForTimeout(4000)
    //await page.waitForSelector('mark')
    await accountLink.click()
        await page.waitForTimeout(6000)
    }
    await page.waitForLoadState('domcontentloaded')
    expect(page.url()).toContain("Account") 
    await page.locator('//div[@title="New"]').click()
    await page.waitForTimeout(3000)
   await page.getByRole('textbox',{name:"Account Name"}).fill("Savings Account")
   await page.getByRole('combobox',{name:'Type'}).click()
   await page.getByTitle("Prospect").click()
   await page.getByRole('combobox',{name:'Industry'}).click()
   await page.getByTitle("Banking").click()
   await page.locator("//button[@name='SaveEdit']").click()
   await page.waitForLoadState('domcontentloaded')
    
    
    const createdAccName=await page.locator("(//records-entity-label[text()='Account']/following::lightning-formatted-text)[1]").innerText()
    expect(createdAccName).toBe("Savings Account")
    await page.waitForTimeout(3000)
    const fUpload= page.locator("//input[@type='file']")
    fUpload.setInputFiles(path.join(__dirname,"../../data/snap.png"))
    const doneBtn=page.locator("//button/following::span[text()='Done']")
   
        await doneBtn.click()
        await page.waitForTimeout(3000)
        await page.waitForLoadState("domcontentloaded")
        const uploadedfilename=await page.locator("//span[contains(@class,'itemTitle')]").innerText()
    expect(uploadedfilename).toBe("snap")
     await page.waitForTimeout(3000)

})
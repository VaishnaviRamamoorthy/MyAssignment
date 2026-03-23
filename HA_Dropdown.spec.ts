import {expect, test} from '@playwright/test'

test('Dropdown checks in Leafground app',async({page})=> {
 await page.goto("https://leafground.com/select.xhtml")
 await page.selectOption("(//h5[contains(text(),'UI Automation tool')]/following::select)[1]",{label:"Selenium"})
 const automationToolOptions=page.locator("(//h5[contains(text(),'UI Automation tool')]/following::select)[1]/option")
 const toolsCount=await automationToolOptions.count()

 for (let index = 0; index < toolsCount; index++) {
   console.log(`index is ${index}`)
      console.log(await automationToolOptions.nth(index).innerText())
     }
     await page.waitForTimeout(3000)
     
   await page.locator("//label[contains(@id,'country')]").click()
   await page.getByRole('option',{name:'Brazil'}).click()
   await page.locator("//label[contains(@id,'city')]").click()
  const city=await page.getByRole('option',{name:'Rio de Janerio'})
  if(await city.isVisible()===true)
  {
    await city.click()
  }
  else{
    await page.locator("//label[contains(@id,'city')]").click()
    await city.click()
  }

   await page.getByRole('button',{name:'Show Options'}).click()
   await page.getByRole('option',{name:"Selenium WebDriver"}).click()
   await page.getByRole('button',{name:'Show Options'}).click()
   await page.getByRole('option',{name:"ReactJs"}).click()
   await page.getByRole('button',{name:'Show Options'}).click()
   await page.getByRole('option',{name:"Appium"}).click()
   await page.locator("//label[contains(@id,'lang')]").click()
   await page.getByRole('option',{name:"English"}).click()
   const langList= page.locator("//ul[contains(@id,'lang_items')]/li")
   const langCount=await langList.count()
   for(let i=0;i<langCount;i++)
   {
    console.log(await langList.nth(i).innerText())
   }
   await page.locator("//label[contains(@id,'value')]").click()
   await page.waitForTimeout(2000)
   const value=page.locator("//ul[contains(@id,'value')]/li[text()='Three']")
   if(await value.isVisible()===true)
 {
  await value.click()
 }
 else{
  await page.locator("//label[contains(@id,'value')]").click()
  await page.waitForTimeout(2000)
  await value.click()
  
 }
   
})
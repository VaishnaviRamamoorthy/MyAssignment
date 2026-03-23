import {test,expect} from '@playwright/test'

test('Validation using Radio button',async({page})=>{
  
    await page.goto("https://leafground.com/radio.xhtml")
    const selectedButton=await page.locator("(//h5[contains(text(),'default')]/following::div[contains(@class,'active')])[1]/following::label").nth(0)
    const buttonText=await selectedButton.innerText()
    console.log(`The default select radio button is ${buttonText}`)
    await expect(buttonText).toBe("Safari")
   const browser=page.locator("(//label[text()='Edge'])[1]")
    await browser.check()
    await expect(browser).toBeChecked()
    await page.locator("//label[text()='Chennai']").check()
    const ageGroup=page.locator("(//h5[contains(text(),'age')]/following::div[contains(@class,'active')])[1]/following::label").nth(0)
    const selectedAge=await ageGroup.innerText()
    expect(ageGroup).toBeChecked()
    await page.locator("//label[text()='1-20 Years']").check()
    await page.waitForTimeout(3000)
})
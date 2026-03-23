import {test,expect} from '@playwright/test'

test('Checkbox selection validation',async({page}) => {
 await page.goto("https://leafground.com/checkbox.xhtml")
 await page.locator("//span[text()='Basic']/preceding-sibling::div[contains(@class,'chkbox')]").click()
 await page.locator("//span[text()='Ajax']/preceding-sibling::div[contains(@class,'chkbox')]").click()
 await expect (page.locator("//span[text()='Checked']")).toBeVisible()
 await page.locator("//label[text()='Java']").check()
 await page.locator("//div[contains(@id,'ajaxTriState')]").click()
 await expect(page.locator("//p[text()='State = 1']")).toBeVisible() 
 await page.locator("//div[contains(@class,'ui-toggleswitch-slider')]").click()
await expect (page.locator("//span[text()='Checked']")).toBeVisible()
await page.waitForTimeout(3000)

await expect(page.locator("//span[text()='Disabled']/preceding::input[@aria-label='Disabled']")).toBeDisabled()
await page.locator("//ul[contains(@class,'multiple')]").click()
//await page.locator("//label[text()='Paris']/preceding-sibling::div[contains(@class,'chkbox')]").click()
await page.locator("(//label[text()='Paris'])[2]").check()
await page.locator("(//label[text()='Berlin'])[2]").check()
await page.locator("(//label[text()='Amsterdam'])[2]").check()
await page.getByRole('link',{name:'Close'}).click()
await page.waitForTimeout(3000)

})
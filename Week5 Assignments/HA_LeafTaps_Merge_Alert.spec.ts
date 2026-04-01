import {test,expect} from '@playwright/test'
test("LeafTaps Validation",async({context,page})=> {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    //To handle alert
    page.once('dialog',async(alert)=>{
    //To click ok button in alert
        alert.accept()
    })
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator('#password').fill('crmsfa')
    await page.locator(".decorativeSubmit").click()
    await page.waitForLoadState('domcontentloaded')
    expect(await page.title()).toBe("Leaftaps - TestLeaf Automation Platform")
    await page.getByRole("link",{name:'CRM/SFA'}).click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole("link",{name:'Leads',exact:true}).click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole("link",{name:'Merge Leads',exact:true}).click()
    await page.waitForLoadState('domcontentloaded')
// From page
    const [fromPage]=await Promise.all([context.waitForEvent('page'),page.locator("//input[@id='partyIdFrom']/following::img[1]").click()])
    await fromPage.locator("(//div[contains(@class,'partyId')])[2]/a").click()
//To page
    const [toPage]=await Promise.all([context.waitForEvent('page'),page.locator("//input[@id='partyIdTo']/following::img[1]").click()])
    await toPage.locator("(//div[contains(@class,'partyId')])[3]/a").click() 
    await page.getByRole("link",{name:'Merge',exact:true}).click()
    await page.waitForLoadState('domcontentloaded')
    expect(await page.title()).toBe("View Lead | opentaps CRM")
    await page.waitForTimeout(3000)
})
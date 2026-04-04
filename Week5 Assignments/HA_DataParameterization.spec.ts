import {test,expect} from '@playwright/test'
import details from '../../Data/createLead.json'

for(let data of details)
{
    test('Create Lead process',async({page})=>{

      await page.goto("http://leaftaps.com/opentaps/control/main")
      await page.locator("#username").fill(data.Username)
    await page.locator('#password').fill(data.Password)
    await page.locator(".decorativeSubmit").click()
    await page.waitForLoadState('domcontentloaded')
    expect(await page.title()).toBe("Leaftaps - TestLeaf Automation Platform")
    await page.getByRole("link",{name:'CRM/SFA'}).click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole("link",{name:'Leads',exact:true}).click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole("link",{name:'Create Lead',exact:true}).click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator("#createLeadForm_companyName").fill(data.CompanyName)
    await page.locator("#createLeadForm_firstName").fill(data.FirstName)
    await page.locator("#createLeadForm_lastName").fill(data.LastName)
    await page.selectOption("#createLeadForm_dataSourceId",{value:data.Source})
    await page.selectOption("#createLeadForm_marketingCampaignId",{value:data.MarketingCampaign})
    const marketingOption=await page.locator("//select[@id='createLeadForm_marketingCampaignId']/option")
    const MO_count=await marketingOption.count()
    console.log(`MArketing count is ${MO_count}`)
    for(let i=0;i<MO_count;i++)
    {
      console.log(await marketingOption.nth(i).innerText())
    }
    await page.selectOption("#createLeadForm_industryEnumId",{value:data.Industry})
    await page.selectOption("#createLeadForm_currencyUomId",{value:data.Currency})
    await page.selectOption("#createLeadForm_generalCountryGeoId",{value:data.Country})
    await page.selectOption("#createLeadForm_generalStateProvinceGeoId",{value:data.State})
    const AllState=await page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option")
    const state_count=await AllState.count()
    console.log(`state count is ${state_count}`)
    for(let i=0;i<state_count;i++)
    {
      console.log(await AllState.nth(i).innerText())
    }
    await page.getByRole("button",{name:"Create Lead",exact:true}).click()
    await page.waitForTimeout(3000)
    })
}
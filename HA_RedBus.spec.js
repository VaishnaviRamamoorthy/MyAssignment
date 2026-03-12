import {chromium, firefox, test} from "@playwright/test"
import { channel } from "node:diagnostics_channel"

test('Launchin RedBus and Flipkart',async()=>{

    //Redbus
    const browser1=await chromium.launch({channel:'msedge'})
    const context1=await browser1.newContext()
    const page1= await context1.newPage()
    await page1.goto("https://www.redbus.in/")
    //page.waitForTimeout(2000)
    let title1=await page1.title()
    console.log(`Title of the page is ${title1}`)
    let url1= page1.url()
    console.log(`URL of the page is ${url1}`)
    //FlipKart
    const browser2=await firefox.launch()
    const context2=await browser2.newContext()
    const page2=await context2.newPage()
    await page2.goto("https://www.flipkart.com")
    let title2=await page2.title()
    console.log(`Title of this page is ${title2}`)
    let url2=page2.url()
    console.log(`Url of this page is ${url2}`)
})
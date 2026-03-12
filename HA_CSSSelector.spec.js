import {test } from "@playwright/test";
test("CreateLead",async({page})=>
{
   await page.goto("http://leaftaps.com/opentaps/control/main")
   await page.locator("#username").fill("Demosalesmanager")
   await page.locator("#password").fill("crmsfa")
   await page.locator(".decorativeSubmit").click()
   
})
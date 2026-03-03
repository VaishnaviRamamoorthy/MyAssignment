function launchBrowser(browserName)
{
 if(browserName==="Chrome")
 {
    console.log("The Browser is Chrome")
 }
 else{
    console.log("The browser is not Chrome")
 }
}
launchBrowser("Chrome")
function runTests(testType)
{
 switch(testType)
 {
    case "Smoke": 
             console.log("Smoke Test")
             break;
    case "Sanity":
             console.log("Sanity testting")
             break;
    case "Regression":
             console.log("Regression Testing")
             break;
    default: 
             console.log("Test type is not Smoke,Sanity and Regression")
    
 }
}
runTests("Regression")
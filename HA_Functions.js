
//Namingfunction
function userProfile(name)
{
    console.log(`Hello ${name}`)
}
userProfile("Vaishnavi")
//Anonymous function
let timeDelay=function(){
    console.log("This message is delayed by 20 seconds")
}

//Callback Function

function getUserDate(delay)
{
    setTimeout(delay,2000)
}
getUserDate(timeDelay)

//Arrow function
let double=(number)=>
{
    let doubleValue=number*number
    console.log(doubleValue)
    return doubleValue
}
console.log(double(3))


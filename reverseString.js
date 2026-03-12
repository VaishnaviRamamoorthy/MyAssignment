
function reverseString(str)
{
let reversed="";
for(let i=str.length-1;i>=0;i--)
{
    //console.log("i value is "+i)
    //console.log("String value is "+str[i])
    reversed+=str[i];
}

if(str===reversed)
{
    console.log("String "+str+" is a palindrome");
}
else{
    console.log("String "+str+" is not a palindrome")
}
}
reverseString("Testleaf")

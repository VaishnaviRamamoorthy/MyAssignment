//Anonymous and arrow function
let add=(x,y) => x+y
console.log(add(10,20))

//Callback function
function sum(a,b,mul,div)
{
 console.log(a+b)  
 mul(4,2)
 div(4,2)

}
function y(a,b)
{
    console.log(a*b)
}
function division(a,b)
{
    console.log(a/b)
}
sum(50,10,y,division);

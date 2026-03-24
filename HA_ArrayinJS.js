
let arr1=[1,2,3,6]
let arr2=[3,4,5,6]

let result=[]

for(let i=0;i<arr1.length;i++)

    {
        result.push(arr1[i])
        console.log(result[i])
        
    }
console.log(result.includes(3))
for(let i=0;i<arr2.length;i++)
{  
    console.log(`arr2 element is ${arr2[i]}`)
    if((result.includes(arr2[i]))===true)
    {
        console.log(`${arr2[i]} inside if condition`)
        console.log(`The element ${arr2[i]} is already present`)
        
    }
    else{
        result.push(arr2[i])
      
        
    }
    
    }
          
         
   
for(let i=0;i<result.length;i++)
{
console.log(result[i])
}
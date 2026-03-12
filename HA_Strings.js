//Example 1
function lastWord(word)
{
   
   for(let i=word.length-1;i>=0;i--)
   {
    if(word[i]==" ")
    {
        console.log(`Word is ${word} \n Last word length is ${i-1}`)
        break
    }
   }
   
    }
lastWord("This is a training")

//Example 2
let sen="Hello How are you today"
let str=sen.trim().split(" ")
   for(let i=str.length-1;i>=0;i--)
   {
    //console.log(`i value is ${i} Str value is ${str[i]}`)
    if(i==str.length-1)
    {
        console.log(`sen is ${sen} \n Last word is ${str[i]}`)
    }
   }
// Example 3

function isAnagram(word1,word2){
    let successCount=0
    let nword1=word1.trim().toLowerCase()
    let nword2=word2.trim().toLowerCase()
    if(nword1.length===nword2.length)
    {
    for(let i=0;i<nword1.length;i++)
    {
        for(let j=0;j<nword2.length;j++)
        {
            if(nword1[i]===nword2[j])
            {
                 console.log(`${nword1[i]} is found`)
                 successCount+=1
                 break
            }
        }
        
    }
    if(successCount===nword1.length)
    {
        console.log(`Two strings ${word1} and ${word2} are anagram`)
    }
    else{
        console.log(`Two strings ${word1} and ${word2} are not anagram`)
    }
}
else{
     console.log(`Two strings ${word1} and ${word2} are not anagram`)
}
    

}
isAnagram("hello","world")

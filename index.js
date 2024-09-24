const express =require('express')
const app =express()
let spamWords=["congratulations","sale","win","jackpot","won","lottery","prize","money","lucky","free"];
function isSpam(contents){
    return spamWords.some((word) =>
    contents.toLowerCase().includes(word.toLowerCase())
);
}


app.get("/home",(request,response)=>{
 const content =request.query.content;

 if (isSpam(content)){
    response.send("Spam Email")

 }
 else{
    response.send(content);
 }
   // response.send("Check Spam implemented");
    
})
app.listen(1234,()=> console.log('Server started'));
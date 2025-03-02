// console.log("T");
// console.log("A");
// console.log("U");
// console.log("H");
// console.log("E");
// console.log("E");
// console.log("D");

function sayMyName(){
    console.log("T");
console.log("A");
console.log("U");
console.log("H");
console.log("E");
console.log("E");
console.log("D");
}
// sayMyName()
// function addTwoNumbers(num1,num2){
//    console.log(num1 + num2);
    
// }
function addTwoNumbers(num1,num2){
    let result = num1 + num2
    // return result
    return num1 + num2 
    
     
 }
// const result = addTwoNumbers(3,9)
// console.log("Result:", result);
function loginUserMessage(username = "Game"){
    if(!username){
        console.log("Please Enter the username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("tauheed"))
console.log(loginUserMessage("Tauheed"))
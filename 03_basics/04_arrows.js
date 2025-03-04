const user = {
    username: "tauheed",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
     
}
// user.welcomeMessage()
// user.username = "Khan"
// user.welcomeMessage()

// console.log(this);
// function malai(){
//     let username = "tauheed"
//     console.log(this.username);
    
// }
// malai()

// const malai = function(){
//     let username = "tauheed"
//     console.log(this.username);
    
// }
// malai()

const malai = () => {
    let username = "tauheed"
    console.log(this);
    
}
// malai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username: "tauheed"})

console.log(addTwo(4,6))

// const myArr = [2,5,4,5,7]
// myArr.forEach()
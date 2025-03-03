function CalculateCartPrice(val1, val2,...num1){
    return num1
}
console.log(CalculateCartPrice(200, 400, 100, 000))

const user = {
    userName: "Tauheed",
    prices: 99
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    userName: "Bahadur",
    price: 199
})

const myNewArr = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,300,400,500,600]));

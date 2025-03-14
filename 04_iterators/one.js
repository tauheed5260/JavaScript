for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
    
}
// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: $({i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
        
    }
    
}
// let myArr = ["Faiz", "Tauheed", "Umar"]
// // console.log(myArr.length);

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     // console.log(element);
    
// }

//break and continue
for (let index = 0; index <= 20; index++) {
    if (index == 10) {
        console.log(`Detected Fav 10`);
        continue
    }
    console.log(`value of i is ${index}`);
    
    
}
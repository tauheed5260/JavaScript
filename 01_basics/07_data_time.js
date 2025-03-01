let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025,0, 01)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));?

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

// `${newDate.getDate} and the time `


newDate.toLocaleString('default',{
    weekday:"narrow",

})
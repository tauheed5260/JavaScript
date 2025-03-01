//singleton
// Object.create
//onjects literals
const mySym = Symbol("Key1")
const JsUser = {
    name: "Tauheed",
    "full name": "Tauheed Khan",
    [mySym]:"mykey1",
    age: 21,
    location: "Noida",
    email: "tauheed@gmail.com",
    isLoggedIn: ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "tauheed.js@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "tauheed.ms@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);   
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.Id = "5260"
tinderUser.name = "Danny"
tinderUser.IsLoggedIn = false


// console.log(tinderUser);
const regularUser = {
    email: "random@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tauheed",
            lastname: "Khan", 
        } 
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);
const users = [
    {
        id: 1,
        email: "tk5260@gmail.com"
    },
]
users[0].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));



const course = {
    courseName: "JS with Tauheed",
    price: "Free",
    courseInstructor: "Tauheed"
}
// course.courseInstructor
const {courseInstructor: Don} = course
console.log(Don);

// {
//     "name": "Tauheed",
//     "courseName": "JS with Tauheed",
//     "price": "Free"
// }

[
    {},
    {}
]
var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Tauheed"

    function two(){
        const website = "github"
        // console.log(username);
        
    }
    // console.log(website);

    // two()
    
}
// one()

if (true){
    const userName = "tauheed"
    if (userName === "tauheed"){
        const website = "github"
        // console.log(userName + website);
        
    }
    // console.log(website);
    
}

// console.log(userName);

// Interesting
console.log(addOne(5))
 function addOne(num){
    return num+1
 }
 console.log(addtwo(5));
 
 const addtwo = function(num){
    return num + 2
 }
//  addtwo(5)
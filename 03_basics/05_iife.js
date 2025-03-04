//Immediately Invoked function Expression(IIFE)

(function malai(){
    // named IIFE  
    console.log(`DB CONNECTED`);
    
})();

// (execution of function)(call)



( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);//Named IIFE
} )('tauheed')
 
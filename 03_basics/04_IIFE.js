// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //  named IIFE
    console.log(`DB CONNECTED`);
})();  // Syntax: ()()=====(function definition)(execution)

( () => {
    //  unnamed IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('anurag')
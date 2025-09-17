












// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const score = 200
// if (score > 100) {
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance < 500) {
//     console.log("balance is less than 500");
// }
// else if (balance < 750){
//     console.log("balance is less than 500");

// }
// else{
//     console.log("balance is less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==3){   // in this operator(&&) if all the conditions are true then it will execute
    consol.log("Allow to buy kcourse");
}
if (userLoggedInFromGoogle || loggedInFromEmail) { //in this operator(||) if only one condition is true then it will execute
    console.log("User logged in")
}
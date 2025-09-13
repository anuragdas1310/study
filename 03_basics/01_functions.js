function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("G");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers(3, "4");
// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result:", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("anurag"))
// console.log(loginUserMessage("anurag"));


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));

// function calculateCartPrice(...num1){  // here(...) used is rest operator
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(val1, val2, ...num1){  //if we use val1,val2 this will not print the given values and print the rest operator values
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

// const user = {
//     username: "anurag",
//     price: 199
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject(user)

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject({
    username: "anurag",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
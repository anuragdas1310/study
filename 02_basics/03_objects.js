// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Anurag",
    "full name": "Anurag Das",
    [mySym]: "mykey1",
    age: 21,
    location: "Gunupur",
    email: "anurag@google.com",
    lastLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "anurag@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anurag@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());

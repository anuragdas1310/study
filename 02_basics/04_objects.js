// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anurag",
            lastname: "das"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
    },
    {
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  //only show the keys in array
console.log(Object.values(tinderUser));  //only show the values in array
console.log(Object.entries(tinderUser));  //represent the keys and values in an array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

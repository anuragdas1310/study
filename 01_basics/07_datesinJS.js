//  Dates

let myDate = new Date();
// console.log(myDate.toString());  // Wed Sep 10 2025 04:01:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // Wed Sep 10 2025
// console.log(myDate.toISOString());  // 2025-09-10T04:01:56.462Z
// console.log(myDate.toJSON());  // 2025-09-10T04:01:56.462Z
// console.log(myDate.toLocaleDateString());  // 9/10/2025
// console.log(myDate.toLocaleString());  // 9/10/2025, 4:01:56 AM
// console.log(myDate.toLocaleTimeString());  // 4:01:56 AM
// console.log(myDate.toTimeString());  // 04:01:56 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date(2025, 0, 23)
// let myCreatedDate = new Date(2025, 0 ,23, 5, 3)
// let myCreatedDate = new Date("2025-09-10")
let myCreatedDate = new Date("10-09-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})

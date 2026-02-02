// Dates

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleDateString());

let myDate = new Date()
// console.log(myDate.toLocaleString());


let dates = new Date (2026, 01, 02)
// console.log(dates);

let myCreatedDate = new Date("2026-02-02")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate2 = new Date()
// console.log(newDate2);
// console.log(newDate2.getMonth() + 1) ;
// console.log(newDate2.getDay()) ;
// console.log(newDate2.getFullYear());

console.log(newDate2.toLocaleString('default', {

    weekday: 'long'
}));







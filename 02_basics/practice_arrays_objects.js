// PRACTICE ARRAYS & OBJECTS

const animals = ["cat", "dog", "rabbit"];
const newanimals = ["parrot" , "elephant"];

const allanimals = animals.concat(newanimals);
// console.log(allanimals);

const name =  "Sonu Raj"
// console.log(Array.from(name));
// console.log(Array.of(name));
// console.log(Array.isArray(name));

//OBJECTS 

const JsUser = {
    ["mysymbol"] : "key1",
    name : "Sonu",
    age : 18,
    Location : "Patna",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Friday"],
}

// console.log(JsUser);

JsUser.Location = "Patna"
// Object.freeze(JsUser);
JsUser.Location = "Mumbai"


// console.log(JsUser);

JsUser.greeting = function () {
    console.log(`Hello ${this.name} , welcome back i hope you are having good day at ${this.Location} ,  your last login days were ${this.lastLoginDays}`);
}

// console.log(JsUser.greeting());
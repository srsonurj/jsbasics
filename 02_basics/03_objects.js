// Singleton
//object.create


//Object Literals


const mysymbol = Symbol("key1")


const JsUser = {
    name : "Sonu",
    "full name" : "Sonu Raj",
    [mysymbol] : "key1",
    age : 18,
    location : "Patna",
    Email : "sonurj@openai.com",
    IsLoggedIn : true,
    LastLoginDays : ["Monday" , "Friday"]

}

// console.log(JsUser["mysymbol"]);
// console.log(JsUser["Email"]);
// console.log(typeof JsUser.mysymbol);

JsUser.Email = "sonurj@openai.com",
// Object.freeze(JsUser)
JsUser.Email = "heybuddyitsme2@mail.com"

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JsUser");
}

JsUser.greetingtwo = function () {
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());







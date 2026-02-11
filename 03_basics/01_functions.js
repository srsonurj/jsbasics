
function saymyname() {    

console.log("S")
console.log("O")
console.log("N")
console.log("U")

}

// saymyname ()

// function addTwoNumber(number1,number2) {
//     return number1 + number2
// }

// const result = addTwoNumber(5, 5)
// // console.log("Result:",result);

function loginUserMessage (username = "sam") {
    if (!username) {
        // console.log("Please enter a valid username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("srsonurj"));

function calculateCartPrice (val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(1600,1200,400,800))

const user = {
    username: "Sonu",
    price: 1199
}

// console.log(user);

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "itssonuhere",
    price: 1000
})

const myNewArray = [4000,6000,8000,12000]

function returnsecondvalue (getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([5000,3000,2000,1000]));


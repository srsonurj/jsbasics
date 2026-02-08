// const snapchatuser = new Object()
const snapchatuser = {}
snapchatuser.id = "sraj"
snapchatuser.name = "Sandy"
snapchatuser.isLoggedIn = false

// console.log(snapchatuser);

const regUser = {
    email: "someone@mail.com",
    fullname: {
        userfullname: {
            firstname: "Sandy",
            lastname : "Singh"
        }

    }

}

// console.log(regUser.fullname.userfullname);

const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "three", 4: "four"}
const obj3 = {5: "five" , 6:"six"}

const objresult =Object.assign(obj1 , obj2 , obj3)
// console.log(objresult);


const objresult2 = {...obj1, ...obj2, ...obj3}
// console.log(objresult2);

const user = [
    {
        id: 1,
        email: "some@mail.com"

    },
    {
        id: 1,
        email: "some@mail.com"
    },
    {
        id: 1,
        email: "some@mail.com"

    },
]

user[1].email
console.log(snapchatuser);

console.log(Object.keys(snapchatuser));
console.log(Object.values(snapchatuser));
console.log(Object.entries(snapchatuser));

console.log(snapchatuser.hasOwnProperty('isLoggedIn'));



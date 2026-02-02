// ARRAY

// An array is a special variable, which can hold more than one value at a time.

const arr = [1, 4, 12, 25, "sonu" , true]
// console.log(arr);

const myarr = new Array(1, 2, 3, 4, 5)
// console.log(newarr [4]);


//Array methods

const newarr = [0, 1, 2, 3, 4, 5]
// console.log(newarr.includes(5));
// console.log(newarr.pop(4));

// newarr.push(6)
// newarr.push(7)
// newarr.pop()

// newarr.unshift(7)
// newarr.shift()
// console.log(newarr);

// const arr2= newarr.join()
// console.log(typeof arr2);


//Slice , Splice

console.log("A ", myarr);
const myn1 = myarr.slice(1, 4)
console.log(myn1);

console.log("B ", myarr);

const myn2 = myarr.splice(1,4)
console.log("C ", myarr);

console.log(myn2);








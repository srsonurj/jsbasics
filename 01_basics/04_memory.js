/*
There are two types of memory in JavaScript:
1.Stack Memory
2.Heap Memory

1. stack memory is used for static memory allocation and the execution of function calls.    
    It stores primitive data types (like numbers, strings, booleans, etc.) and references to objects in heap memory.

2. heap memory is used for dynamic memory allocation where (objects, arrays, and functions) are stored.
    When an object is created, it is stored in heap memory, and a reference to that object is stored in stack memory.
*/

     const name = "sonu"; // "sonu is stored in stack memory"



    let myfunc = function (){

    name : "sonu"
    age : 18
    isLoggedIn : true
      
    } // the object is stored in heap memory and the reference to that object is stored in stack memory.

    console.log(typeof myfunc);
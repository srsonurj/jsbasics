const m_heroes = ["ironman", "spiderman" , "hulk"]
const d_heroes = ["batman", "superman" , "flash"]

// console.log( m_heroes.concat(d_heroes));

const all_new_heroes = [...m_heroes, ...d_heroes]
// console.log(all_new_heroes);

const another_array = [ 1, 2, 4, [6, 8, 10, 12] ,[14 ,[16, 18, 20] , 22]]
const real_another_array = another_array.flat(3)
// console.log(real_another_array);



console.log(Array.isArray("sonu"));
console.log(Array.from("sonu"));
console.log(Array.from({name : "sonu"})); //interesting.

let goal = 120
let goal2 = 200
let goal3 = 310

console.log(Array.of(goal, goal2, goal3));














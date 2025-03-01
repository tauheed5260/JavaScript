const marvel_heros = ["thor","hulk","spiderman"]
const dc_heros  = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const real = anotherArr.flat(Infinity)
console.log(real);

console.log(Array.isArray("Tauheed"))
console.log(Array.from("Tauheed"))
console.log(Array.isArray({name:"Tauheed"})) // intresting
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));



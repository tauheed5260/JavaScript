const name = "Tauheed"
const repoCount = 12
//console.log(name + repoCount + "Value");

console.log(`Hello My name is ${name} and and my repo count is ${repoCount}`);
const gameName = new String('Tauheed-Khan')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   tauheed    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tauheed.com/tauheed%16khan"
console.log(url.replace('%16','-'))
console.log(url.includes('tauheed'))
console.log(gameName.split('-'));

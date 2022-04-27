console.log("enjoy");
 async function dude() {
console.log("good morning");
const response = await fetch('https://api.github.com/users');
console.log("good night");
const users = await response.json();
console.log("Everything resolved");
return users;
};
console.log("merry christmass");
console.log("he is cool");
let a= dude();
console.log("he is handsome");
console.log(a);
a.then(data => console.log(data))
console.log("last line of this js file");
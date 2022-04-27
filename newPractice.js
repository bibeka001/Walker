// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x= 10;
//     console.log(x);
// }
// function b(){
//     var x= 100;
//     console.log(x);
// }

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;
// function getName(){
// console.log("Namaste Javascript")
// }

// function a() {
//     c();
//   function c() {
//     console.log(b);
//   }
// }
// var b = 10;
// a();

let array = ["ball", "bat", "apple", "orange"];
function dude(a) {
  let newArray = array.indexOf(a);
  newArray === -1
  ?( console.log(a, "is not in the Array"), console.log("jjjjj"))
  : console.log(array[newArray])
}
dude("eeee");

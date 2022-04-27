// var myCars=["audi", "bmw", "mercedese", "aston matrin", "tata"];
// console.log(myCars);
// console.log(myCars[3]);
// console.log(myCars.length);
// console.log(myCars[myCars.length-1])

//FOR
// var myCars=["audi", "bmw", "mercedese", "aston matrin", "tata"];
// for(var i=0; i<myCars.length; i++){
// console.log(myCars[i]);
// }
//FOR IN
// var myCars=["audi", "bmw", "mercedese", "aston matrin", "tata"];
// for(let elements in myCars){
//     console.log(elements);
// }
//FOR OF
// var myCars=["audi", "bmw", "mercedese", "aston /
// console.log(element);
// console.log(element + " index: " + index);
// console.log(element + " index: " + index + " " + array );
// });

// var friends = ['arjun', 'raman', 'rohit'];
// console.log(friends);
// document.write(friends(2));

// const studentdata =['ram', 'rohit', 'rosy','rony'];
// console.log(studentdata[1]);
// console.log(studentdata[2]);

const data = [
  { id: 1, name: "rohit", degree: "bcs" },
  { id: 2, name: "rosy", degree: "acs" },
  { id: 3, name: "rony", degree: "ccs" },
];

const newdata= data.map(function (cvalue){
    return `My name is ${cvalue.name}, ` 
});
console.log(newdata);
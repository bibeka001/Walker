// let employees = [
//   { id: 101, name: "Bibek", salary: 65000 },
//   { id: 105, name: "Rajesh", salary: 60000 },
// ];

// let createNewEmployee = (employee, callback) => {
//   setTimeout(() => {
//     employees.push(employee);
//     callback();
//   }, 3000);
// };
// let getEmployees = () => {
//   setTimeout(() => {
//     let employeesRows = "";
//     employees.forEach((employee) => {
//       employeesRows += `<tr> <td> ${employee.id} </td>
//       <td> ${employee.name} </td>
//       <td> ${employee.salary} </td></tr>`;
//     });
//     document.querySelector("#table-body").innerHTML = employeesRows;
//   }, 1000);
// };
// createNewEmployee({ id: 104, name: "Ronit", salary: 45000 }, getEmployees);

// let calculate =(a, b, operation) =>{
// if (operation == 'sum'){
// return a+b;
// }
// if (operation == 'mul'){
// return a*b;
// }
// };
// let result = calculate(10, 45, "sum");
// console.log(result);
// result= calculate(45,12, 'mul');
// console.log(result);

// //CALLBACK FUNCTION
// let sum= (a,b) =>{
//     return a+b ;
// }
// let mul= (a,b) =>{
//     return a*b;
// };
// let calculate= (a,b, callback)=>{
//     return callback(a,b);
// }
// let result=calculate(484,8948, sum);
// console.log(result);
//  result=calculate(4,8, mul);
// console.log(result);
// result=calculate(48,12, () =>{
//     return a-b;
// })

// let simmy=( a,b,c,d,callback)=> {
//   callback(b);
// };
//   let getDetails= (name)=> {
// console.log("Name", name);

//   }

// simmy(10, "Bibeka", [45, 55], {id:101, loc: "banglore"}, getDetails);

// let friends =(a,b,c,d, callback) =>{
//    callback(a,d);

// }
// let amigos= (name , address)=>{
//   console.log( name);
//   console.log(address);
// }

// console.log(friends("rajesh", "raman", [45, 87, 45], {prof: "softy", loc: "Banglore"}, amigos))

// let employee={
//   name:"garu",
//   loc:["bangalore", "odisha"],
//   address:{city:"bhopal", street:"bridge"}
// }

// let {name,address}= employee

// console.log(name)
// console.log(address)

// () =>{
//   console.log("hello");
// }

// let calculate =(a, b, operation) =>{
// if (operation == "sum"){
//   return a+b;
// }
// if (operation =="mul"){
//   return a*b;
// }
// };
// let result= calculate(23, 32, "sum");
// console.log(result);
//  result= calculate(12, 6, "mul");
// console.log(result1);

// let sum =(a, b) =>{
//   return a+b;
// };
// let mul =(a,b) =>{
//   return a*b;
// }
// let calculate =(a,b, callback) =>{
//   return callback(a,b);
// };
// let result= calculate(19, 34, sum); // here, function itself as a argument
// console.log(result);
//  result= calculate(19, 34, mul); // here, function itself as a argument
// console.log(result);
// result = calculate(34, 21, (a,b) => {
//   return a-b;
// });
// console.log(result);

// let employees = [
//   { id: 101, name: "Bikram", salary: 50000 },
//   { id: 102, name: "Bidya", salary: 60000 },
// ];
// let createNewEmployee = (employee, callback) => {
//   setTimeout(() => {
//     employees.push(employee);
//     callback();
//     // console.log(employee);
//   }, 3000);
// };
// let getEmployees = () => {
//   setTimeout (() => {
//     let employeeRows = "";
//     employees.forEach((employee) => {
//       employeeRows += `<tr>
//         <td> ${employee.id}</td>
//         <td> ${employee.name}</td>
//         <td> ${employee.salary}</td></tr>`;
//     });
//     document.querySelector("#table-body").innerHTML = employeeRows;
//   }, 1000);
// };
// createNewEmployee({ id: 104, name: " Satya", salary: 80000 }, getEmployees);
// createNewEmployee({ id: 108, name: "Jayant", salary: 65000 });
// getEmployees();

// function add(a,b){
//   console.log(a+b);
// }
// add(48,32);

// function add(a,b){
//   return a+b;
// }
// let result= add(488,12);
// console.log(result);

// let add= (a,b) => {
//   console.log(a+b);
// }
// add(14,78);

// let mul= (a,b) => a*b;
// let result= mul(45,4);
// console.log(result);

// let add =(a,b) => {
//   return a+b;
// }
// let result= add(45,78);
// console.log(result);

// let sum = (a,b) => {
//   return a+b;
// };
// let mul = (a,b) =>{
//   return a*b;
// };
// let calculate =(a,b, callback) => {
//   return callback(a,b);
// };
// let result= calculate(14,45, sum);
// console.log(result);
//  result =calculate(47,4, mul);
// console.log(result);

//MAP METHOD
// const arr = [4, 5, 1, 6, 3];
// function double(x){
//   return x*2;
// }
// function binary(x){
//   return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);

// const oldarr=['vinod', 'rahul', 'ram', 'rony'];
// // console.log(oldarr[2]);
// // console.log(oldarr[3]);
// const newarr= oldarr.map(function(cvalue, i, arr){
// // return i + " : " + cvalue +"vahadur" + "thapa";
// console.log(arr);
// });
// console.log(newarr);
/* <p id= "showdata"></p>
const data = [
  { id: 1, name: "rahul", degree: "Mtech" }, */
//   { id: 2, name: "sonia", degree: "Bsc" },
//   { id: 3, name: "rajib", degree: "Msc" },
//   { id: 4, name: "rangit", degree: "Phd" },
// ];
// // const newdata = data.map(function (cvalue, i, arr) {
// //   return cvalue;
// }
// // );
// // OR
// const newdata = data.map((cvalue) => {
//   return `my name is ${cvalue.name}. my highest qualification is ${cvalue.degree}`;
// })
// console.log(newdata);
// document.getElementById("showdata").innerHTML= newdata;

// let firstName = "vinod";
// let lastName = "thapa";
// console.log(`My name is ${firstName}. My last name is ${lastName}`)

// let a = 29;
// let b = 30;
// console.log(`Fifty is + (a+b) + ` and\nnot` + (2* a+b) + `.`);

// const myprolang = ['js', 'c', 'react', 'python', 'java'];
// let [top1, top2, top3, top4, top5] = myprolang;
// console.log(`my fav prog lang is ${top5}`);
// console.log(myprolang.length)
// let[ top1,,,,toplast] = myprolang

// let a =223;
// b =23;
// let temp =a;
// a=b;
// b=temp;
// console.log(`the value of a is ${a} and the value of b is ${b}`)
// [a,b] = [b,a]
//her we are storing the value of a in b and vice versa
// console.log(`the value of  a is ${a} and the value of b is ${b}`)

// const bioData = {
//   name: "ram",
//   age: 232,
//   deg: "Mtech",
//   hobby:{
//     first: "fittness",
//     sec: "travelling",
//   }
// };
// let {name, age, deg} = bioData;
// let {name:namee, age:ages, deg, hobby} = bioData;
// console.log(`my name is ${namee}. My age is ${ages}. My qualification is ${deg}. my hobby is ${hobby.sec}`)

// var sum = function(){
//   var a =5; b= 23;
//   return a+b;
// }
// console.log(sum());

// function add(a,b){
// return a+b;
// }
// add(23,343)
//  console.log(add());
// function mul(a,b){
//   return a*b;
// }
// let result= mul(12,23)
// console.log(result)
// const sum = (a,b) => {
//   return a+b;
// }
// let result = sum(34,43);
// console.log(result)

// const mul = (a=2,b,c=2) => {
//   console.log(a*b*c)
// }
// mul(4)

// function mul(a,b,c) {
//   console.log(a*b*c);
// }
// var arrVal = [2,5,2]
// console.log(...arrVal)
// mul(...arrVal);

// let arrc1= [1,2,3]
// let arrc3=[3,2,2,4]
// let arrc2= arrc1;
// console.log(arrc2)
// let arrc2=[...arrc1,4,9]
// console.log(arrc2)
// let arrc2=[...arrc1,...arrc3,44]

// class Students {
//   constructor(name, age, cls) {
//     this.myname = name;
//     this.myage = age;
//     this.mycls = cls;
//   }
  // biodata() {
    // console.log(
      // `Hy My name is ${this.myname}. I'm ${this.myage} years old. I'm in standrd ${this.mycls} `
    // );
  // }
// }
// class Player extends Students {
//   constructor(name, age, cls,game) {
//     super(name, age, cls, game);
//     this.mygame = game;
//   }
//   play_biodata() {
//     console.log(
//       `Hy My name is ${this.myname}. I'm ${this.myage} years old. I'm in standrd ${this.mycls}. I play ${this.mygame} `
//     );
//   }
// }
// let obj1 = new Students("vinod", 27, 8);
// obj1.biodata();
// let obj3 = new Player("Rohit", 27, 8, 'football');
// obj3.play_biodata();


// const oldarr = ['bibeka', 'nanda', 'singh'];
// console.log(oldarr[0]);
// console.log(oldarr[1]);
// console.log(oldarr[2]);
// const newarr= oldarr.map(function(cvalue, index, arr){
//   // return cvalue + index + " :" +  "cool";
//   console.log(arr);
// })
// console.log(newarr);

// let name = "rajesh"
// console.log(name);
const name= "rohit";
console.log(name)

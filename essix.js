// class Car{
//     constructor(name){
//         this.brand= name;
//     }
//     present(){
//         return "I have a" + this.brand;
//     }
// }
// const myCar= new Car("Mercedese");
// console.log(myCar);


// class City{
//     constructor(name){
//         this.place = name;
//     }
//     get(){
//         return "i have " + this.place;
//     }
// }
// const mywish = new City("Banglore");
// console.log(mywish);
// mywish.get();

// class Car{
//     constructor(name){
//         this.brand =name;
//     }
//     present(){
//         return "I have a " + this.brand;
//     }
// }
// class Model extends Car {
//     constructor(name, mod){
//         super(name);
//         this.model = mod;
//     }
//     show(){
//         return this.present() + "it is a" + this.model
//     }
// }
// const mycar= new Model("Ford", "Mustang");
// console.log(mycar);
// mycar.show();


// function hello(){
    
// }

// console.log("My name is viswanathan "  +  " anand");
// console.log(`My  name is viswanathan anand`);
// let firstName= "Rahul";
// let lastName = "Gandhi";
// console.log("My name is " + firstName + " . My last name is " + lastName + ".");
// console.log(`My name is ${firstName} My last name is ${lastName}`);

// let a = 20;
// let b = 40;
// console.log(`Fifty is ` + (a+b) `and\not` + )


//ARRAY DESTRUCTURING
// const myproglang = ['js', 'php', 'python', 'java', '.net'];
// var top1 = myproglang[0];
// var top2 = myproglang[1];
// var top3 = myproglang[2];
// console.log(`My fav lang is ${top1} `)
// let [top1, top2, top3, top4, top5] = myproglang;
// console.log(`my fav prog lang is ${top1} and my least fav lang is ${top3}`);
// console.log(myproglang.length);

// let [top1,,,,toplast]= myproglang;
// console.log(`my fav prog is ${top1} and my least lang is ${toplast}`);


// let top1, top2;
// [top1, top2] = myproglang;
// console.log(`my fav lang is ${top1} and my least is ${top2}`);



//SWAPPING OF NUMBERS WITH OR WITHOUT 3RD VARIABLE
// // let a = 5;
// let b= 50;
// // let temp = a;
// a = b;
// b = temp;
// [a,b]= [b,a];
// console.log(`the value of a is ${a} and the value of b is ${b}.`);


//OBJECT VARIABLE
// let bigdata= {
//     name:"Rahul Gandhi",
//     age:47,
//     deg:"Fail",
//     hobb:{
//         fir:"election",
//         sec:"bluff"
//     }
// }
// let {name, age, deg, hobb} = bigdata;
// console.log(`my name is ${name}. my age is ${age} my deg is ${deg}`);
// console.log(`my name is ${name}. my age is ${age} my deg is ${deg}. my hobby is ${hobb.sec}`);

//OR
// let name, age, deg, hobb;
// ({name, age, deg, hobb}= bigdata);
// console.log(`my name is ${name}. my age is ${age} my deg is ${deg}`);

//REST OPERATOR
// function sum(...inputs){
//     console.log(inputs);
//     console.log(...inputs);
//     let total = 0;
//     for(let i of inputs){
//         total += i;
//     }
//     console.log(total);
// }
 
// sum(23,2, 33, 4, 32);
 
// function fun (a,b, ...c){
//     console.log((`${a} ${b}`));
//     console.log(c);
//     console.log(c[0]);
//     console.log(c.length);
//     console.log(c.indexOf('Edan'));
// }
// fun('Ronaldo', 'Messi', 'Pele', 'Neymar', 'Edan');

//SPREAD OPERATOR
//By apply method - ES5
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// var arrVal=[3,2,5];
// sum.apply(null, arrVal);
//BY Rest Operator- ES6
// function sum(a,b,c){
//     console.log(a+b+c);

// }
// var arrVal= [3,1,5];
// console.log(arrVal);
// sum(...arrVal);

// let firstName = "Allu";
// let lastName= "Arjun";
// console.log(`My firstname is ${firstName} and my last name is ${lastName}`);
// console.log(`${firstName}`.startsWith('a'));
// console.log(`${lastName}`.startsWith("A"));
// console.log(`${firstName}`.includes("lu"));

// console.log(`${firstName}  `.repeat(4));
// console.log(`${firstName}${lastName} `.repeat(6));


// const myproglang=[
//     'js', 'python', 'java', 'c', 'php'];
// var top1 = myproglang[0];
// var top2= myproglang[1];
// console.log(`my fav prog lang is ${top1}`);
// console.log("my fav prog lang is " +  top1);
// console.log(myproglang.length);


// let a = 4;
// let b = 8;
// // let temp =a;
// // a = b;
// [a,b] = [b,a];
// console.log(`the value of a is ${a} and the value of b is ${b}`);

// let bigdata= {
//     name: "Sonia",
//     age: 50,
//     deg: "Fail"
// }
// let {name, age, deg} = bigdata;
// console.log(`her name is ${name} and her age is ${age}`);
// console.log(`her name is ${bigdata.name}`);

//  function sum(a,b){
//      console.log(a+b);
//  }
//  sum(45,32);
//  function mul(a,b,c,d){
//      console.log(a*b*c*d);
//  }
//  mul(2,3,1,34);
 function  sum(...inputs){
     console.log(inputs);
     console.log(...inputs);
 }
 sum(3,42,4,12);
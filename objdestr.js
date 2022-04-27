// let employee = {name: "Bibeka", age: 28, salary: 75000};
// let login ={

// };
// let product ={
//     result: "success",
//     product: {
//         created:" 25 aug 2021",
//         id: "sdfsdfs",
//         brand: "Apple",
//         Image: "asasdas",
//         price: 45000,
//         qty:14,
//         category: "mobiles",
//         des:"best small size Iphone",
//         usuage: "use back cover",
//     }

// };
// console.log(employee.name);
// console.log(product.product.category);
// let x = 10;
// console.log(x);
// let{name} = employee;
// console.log(name);

// let product = {
//     result : "success",
//     product: {

//     },
//     status: "failure",
// };
// let {result, status} = product;
// console.log(result);
// console.log(status);

// let employee ={
//     name: "Raman",
//     loc:["dubai", "singapore"],
//     address: {street: "north paragnas", city: "howarh"},
//     salary: 100000,
// };


// ARRAY INDEXING
// let size = [12,54, 45, 46];
// let [staring_Size, b, c, d] = size;
// console.log(staring_Size);
// console.log(b);
// console.log(d);


// let size = [47, 33, 23, 657, 98, 39];
// let [a, b, c, d, ...e] = size;
// console.log(a);
// console.log(d);
// console.log(e);

// let emp = {name: "kalyan", sal:75000};
// let {sal = 45000, loc= "hyderabad"} = emp;
// console.log(sal);
// //  console.log(loc);

// let employee = {name:'raja', age: 12};
// console.log(employee.name);
// let{name} = employee;
// console.log(name);


  
// const myproglang = ['js', 'php', 'python', 'Reactjs'];
// var top1= myproglang[0];
// var top2= myproglang[1];
// var top3= myproglang[2];
// var top4= myproglang[3];
// console.log(`my fav prog lang is ${top1}`);
// console.log(myproglang.length);
// let [top1, top2, top3] = myproglang;
 
// let [top1,,,toplast]= myproglang;
// console.log(`my fav prog lang is ${top1} and my most fav lang is ${toplast}`);
// let top1, top3;
// [top1, top3] = myproglang;
// console.log(`my fav prog lang is ${top1} and my most fav lang is ${top3}`);


let biodata= {
    name:'rathod',
    age: 35,
    deg: 'MCS', 
    hobby: {
        first: 'football',
        sec: 'fitness'
    }
}
console.log(biodata.age);
let name, age, deg, hobby;
({name, age, deg, hobby} = biodata);
console.log(`my name is ${name}. my age is ${age}. my deg is ${deg}. my hobby is ${hobby.sec}`);
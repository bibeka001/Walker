let employee={
    name:"kavir",
    loc:"banglore",
    salary:65000,
    age:27,
}
let size=[32,54,87,21]
console.log(employee.name);
console.log(employee.age);
console.log(employee.loc);
console.log(employee.salary);
employee.salary=240000;
employee.loc="London";
console.log(employee);
Object.entries(employee);
//if we try to access or read object property, which is not existed it'll return undefined
// console.log(employee.currentlocation);

// let employee={
//     name:"casie",
//     age:25,
//     loc:"edinburg",
//     salary:600000,
//     getDetais:() =>{
//         return "Hello";
//     }
// };
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.loc);
// employee.loc="London";
// employee.hobby="football";
// console.log(employee);
// console.log(employee.hobby);
// console.log(employee.currentLocation);
// console.log(employee.getDetais);
// console.log(employee.getDetais());
//if you are trying to access/invoke a method from object which is not existed in object, it will throw error
// console.log(employee.getFullDetais());

// let employee={
//     name:"bibeka",
//     age:27,
//     loc:"banglore",
//     salary:70000,
// }
// console.log(employee.salary);
//  console.log(employee.loc);
// employee.loc="London";
// console.log(employee);

//THERE ARE 4 WAYS TO CREATE OBJECT IN JS
// Object Literal
// Object.create
// New Keyward
// class

//NEW Method
// function employee(name){
//     this.name= name;
// }
// var emp=new employee("rabita");
// console.log(emp);
// console.log(typeof emp);

// function student(rollno){
//     this.rollno= rollno;
// }
// var stud= new student(234);
// console.log(stud);
// console.log(typeof stud);

//CLASS Method
// class employee{}
// var emp =new employee();
// var emp1= new employee();
// console.log(typeof emp);
// console.log(typeof emp1);
// console.log(typeof []);

//OBJECT.CREATE Method

// var employee={
//     name:"bibeka",
//     sal:80000,
//     loc:"New York",
// };
// var newemployee= Object.create(employee);
// console.log(newemployee.name);
// console.log(newemployee.loc);

//FINDING LENGTH OF ARRAY
// let car= ["bmw", "audi", "mercedese"]
// console.log(car.length);

// but there is no such method to find the length of Object
// let man = {
//   name: "Raj",
//   age: 24,
//   salary: 78000,
// };
// let woman={
//     hg:"barsha",
//     jhgj:22,
//     hbjh:4200,
// }
// console.log(man.length)

//OBJECT.KEYS()
// It will create an array o f all the keyname
// Object.keys()
// console.log(Object.keys(man));

//OBJECT.KEYS().LENGTH
//  console.log(Object.keys(man).length);
//OBJCET.VALUES()
//  console.log(Object.values(man));
//  console.log(Object.entries(man));
//OBJECT ENTRIES
// const Arr = ["d", ["b", ["h"]], ["fg", "hhj"], "hgj"];
// console.log(Arr.flat(2))
// let Output = Object.entries(man).flat(Infinity);
// console.log(Output);
// console.log(Object.entries(man));

// console.log(Object.assign({},woman,man))
// let one ={one:1};
//     two={two:2};
//     let all =Object.assign(two,one);
//     console.log(all);
// let three={...one, ...two};
// console.log(three);

// let userDetails = {
//     name: "bibeka",
//     password: 123,
//     email: "bapuni.sid@gmail.com",

// };
// let newDetails = {
//     name: "Bibkea",
//     email: "dude23@gmail.com",
// };
// let result={...userDetails, ...newDetails};
// console.log(result);

// let person = {
//     first_Name: "Rahul",
//     last_Name: "Yadav",
//     full_Name: function() {
//         return this.first_Name + " " + this.last_Name;
//     },
//     get_FirstName:() => {
//         return this.first_Name;
//     }
// };
// console.log(person.full_Name());
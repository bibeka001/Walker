// const Address= require("./address");

// class Customer{
//     constructor(name,age,email,address){
//         this.name=name;
//         this.age=age;
//         this.email=email;
//         this.address=address
//     }

// }

// let obj1=new Customer("garu",28,'@mail', new Address('jaleswar', 9211, 'NH4', 'bengal'));
// console.log(obj1)

// class Emp{
//     emp_name="Bibek";
//     emp_no= 101;
//     emp_address= "Banglore"
// }
// let emp1= new Emp()
// console.log(emp1);
// console.log(emp1.emp_name);
// console.log(emp1.emp_no);
// console.log(emp1.emp_address);

// class Employee{
//     salary = 100000;
//     getSalary () {}
// }
// console.log(new Employee());
//  let obj1= new Employee();
//  console.log(obj1)

// class Test{
//     value= 7000;

// }
// console.log(new Test());
// console.log(new Test());
// console.log(new Test());
// console.log(new Test());
// console.log(new Test());
// console.log(new Test());
// console.log(new Test());

// class Emp{
// emp_no =101;
// emp_name = "Bibek";
// }
// let emp1= new Emp();
// console.log(new Emp());
// console.log(new Emp().emp_no);
// console.log(emp1.emp_no);
// console.log(emp1.emp_name);

// class Emp{
//     emp_no = 101;
//     emp_name= "Bibeka";
//     get_Emp_info(){
//         return "Hello";
//     }
// }
// let emp1= new Emp();
// console.log(emp1.get_Emp_info());

// class Product{
//     Product_name = "Iphone 13";
//     get_Product_name(){
//         return "Hello";
//     }
// }
// let obj1= new Product();
// console.log(obj1);
// console.log(obj1.Product_name);
//IF YOU'RE TRYING TO ACCESS OBJECT PROPERTY WHICH IS NOT EXISTED IT'LL RETURN UNDEFINED
// console.log(obj1.Product_price);
// console.log(obj1.get_Product_name());
//IF YOU'RE TRYING TO ACCESS A METHOD WHICH IS NOT EXISTED IT'LL THROW ERROR
// console.log(obj1.Product_discount());

// class Test {
//   min_Bal = 500;
//   constructor(name) {
//     this.acc_Name = name;
//     console.log("constructor will execute automatically");
//   }

//   get_Min_Bal() {
//     console.log("Min Bal:", this.min_Bal);
//   }
// }
 
// let obj1 = new Test("Bibeka");
// console.log(obj1.min_Bal);
// console.log(obj1.get_Min_Bal);

// class BankAccount{
//     min_Bal=500;
//     constructor(acc_No, acc_Name, city){
//         this.acc_Name= acc_Name;
//         this.acc_No= acc_No;
//         this.city= city;
//         console.log("Constructor execute only once, automatically")
//     }
// }
// let acc1 = new BankAccount(101, "Rohit", "Banglore");
// console.log(acc1);
// //how to access object property
// console.log(acc1.acc_Name);
// console.log(acc1.city);
// console.log(acc1.min_Bal);
// console.log(acc1.acc_No)
// let acc2 = new BankAccount(121, "Ram", "chennai");
// console.log(acc2);
// console.log(acc2.acc_No);


//CLASS
// class Order{
//     min_Order_Value= 500;
//     get_Order_Value (){

//     }
// }
// new Order (); // memory location allocated.
// new Order(); 
// SYNTAX:
// Object.property
// Object.method()
// let obj1 = new Order();
//reference/object ref/ Object
// obj1.min_Order_Value;
// obj1. get_Order_Value ()


//  class Order{
    //  min_Order_Value =500; //property
//      get_Order_value(){
//          //method
//          return this.min_Order_Value;
//      }
//  }
//  let obj1 = new Order();
//  console.log(obj1.min_Order_Value);
//OUTSIDE of the class we've to use object reference
//INSIDE of the class we've to use this keyward
    //Here, THIS refers to current object 
// let x = obj1.get_Order_value();
// console.log(x);

// class Order{
//     min_Order_Value = 500;
//     get_Order_Value(){
//         console.log(this);
//         console.log(this.min_Order_Value);
//         return this.min_Order_Value;
//     }
// }
// let obj1 = new Order();
// console.log(obj1);
// console.log(this); //{} here 
// console.log(this.min_Order_Value); //undefined coz this refers to current object 
// obj1.get_Order_Value(); //it's a method that gives value according to the current object


// class Product{
//     Product_Name="Iphone 13";
//     get_Product(){
//         console.log(this);
        //Here, this refers to current object inside a class
//         console.log(this.Product_Name);
//     }
// }
// let prod1= new Product();
// prod1.get_Product();
// console.log(this);
//here we've to use  a object or object reference outside a class
//prod1 is a object reference or reference variable

//    class Customer {
//        constructor(cust_No, cust_Name, cust_age){
//            this.cust_No= cust_No;
//            this.cust_Name= cust_Name;
//            this.cust_age= cust_age;
//        }
         
//    }
//    let c1=new Customer(143, "Rajesh", 26);
//    console.log(c1);
//    console.log(c1.cust_Name);
//    console.log(c1.cust_age);
//    console.log(c1.cust_No);

 
// const Address =require("./Address"); //ES5 
// class Customer{
//     constructor(cust_No, cust_Name, cust_age, address){
//         this.cust_No= cust_No;
//         this.cust_Name= cust_Name;
//         this.cust_age= cust_age;
//         this.address= address;
//     }
// }
// let c1= new Customer(
//     101,
//     "Rajesh",
//     24,
//     new Address("14", "Marathali" , "Banglore", 123456, "Marathali Bridge")
// );
// console.log(c1);

// const Address= require("./Address");
// const Customer = require("./class");
// class CreditCard {
//     constructor(a, b, c){
//         this.eligible = a;
//         this.Address= b;
//         this.dummyCust= c;
//     }
// } 
//  let cc1 = new CreditCard(
//      "Eligible", 
//      new Address(102, "Jayanagar", "Banglore", 456123, "Jaydev"),
//      new Customer(1,2,3,4)
//  );
//  console.log(cc1);


// class Parent{
//   asset = 10000000;
// }
// class child extends Parent{
//   constructor (){
//       super();
//   }
// }
// let p1 = new child();
// console.log(p1);
// class Rectangle{
//   constructor(height, width){
//     this.name = 'rectangle';
//     this.height= 'height';
//     this.width= 'width';
//   }
//   sayName(){
//     console.log('hi, I am a ', this.name + '.');
//   }
//   get area (){
//     return this.height * this.width;
//   }
//   set area(value){
//     this.area(value)
//       this._area = value;
//     }
//   }
//   class Square extends Rectangle{
//     constructor(length){
//       this.height;
//       super(length, length);
//       this.name = 'Square';
//     }
//   }

function sum(x,y, z){
  return x+ y + z;
}
const numbers = [12, 33, 14];
 console.log(sum(...numbers));

 console.log(sum.apply (null, numbers));
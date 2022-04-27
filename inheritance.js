// class Parent{
//     asset = 10000000;
//     get_Parent_Quality(){
//         return this.asset;
//     }
// }
// class child extends Parent{
//     constructor (){
//         super();
//         this.child_Asset=500000
//     }
//     get_Parent_Quality(){
//         return this.child_Asset;
//     }
// }
// let p1 = new child();
// console.log(p1);
// console.log(p1.get_Parent_Quality());

//Rendering
// class Component {
//     name= "React";
//     render(){
//         return "Component Render Method";
//     }
// }
// class Message extends Component {}
// let m1= new Message();
// console.log(m1);
// console.log(m1.render());
// //Here, m1 is a message class object

// class Father{
//     asset = 10000000;

// }
// class Son extends Father {}
// let s1 = new Son();
// console.log(s1);


// class Teacher{
//     constructor(){
//         console.log("Teacher/Student class contstructor")
//     }
//     qualification = "Phd";
//     quality (){
//         return "IIT Bombay";
//     }
// }
// class Student extends Teacher {
//     constructor(){
//         super();
//         console.log("Student/Teacher class constructor")
//     }
//     qualification= "IISC Bengaluru"
//     quality(){
//         return "Student - IIT Bombay";
//     }
// }
// let a1 = new Student();
// console.log(a1);
// console.log(a1.quality());


//CLASS- blueprint to construct object
//THIS -keyword refers to current object
//SUPER -keyword calls the parent class constructor
//CONSTRUCTOR OBJ initialize values, it's a special method and it'll execute only once @ time of object creation

// class Name{
//  constructor(a){
//      this.Name = a;
//  }   
// }
// class Message extends Name{
//     constructor(message, name){
//         super(name);
//         this.message= message;
//     }
//     getName(){
//         console.log();
//     }
// }
// let b1= new Message("Buenos Dias", "Mr Johnson");
// console.log(b1);

// class Parent{
//     constructor(){
//         console.log("Parent Class Constructor");
//     }
// }
//  class Child extends Parent{
//      constructor(){
//          super();
//          console.log("Child Class Constructor");
//      }
//  }
//  let m1= new Child();
 //again we add something 
//  class Parent{
//     constructor(parentAge){
//         console.log("Parent Class Constructor");
//        this.parentAge= parentAge;
//     }
// }
//  class Child extends Parent{
//      constructor(parentAge, childAge){
        //  super(parentAge);//executing parent class constructor
//          console.log("Child Class Constructor");
//          this.childAge= childAge;
//      }
//  }
//  let m1= new Child("p45", "c27");
//  console.log(m1);
 //inheriting the parent class properties and methods to child class with the help of extends keyword
  



// class CentralTax{
//     tax=12;
// }
// class StateTax extends CentralTax{
    // tax=15;
    // here overriding is occuring
// }
// let tx= new StateTax();
// console.log(tx);
// but if there is not tax=15 then there will be tax=12 as output
// console.log(tx.tax);

//HERE INHERITING THE PARENT CLASS PROPERTIES/MEMEBER TO CHILD CLASS USING EXTENDS KEYWORDS


// class CentralTax{
//     tax=18;
// }
// class Odisha extends CentralTax{
//     tax=25;
// }
// class Karnataka extends CentralTax{
//     tax=35;
// }
// class Goa extends CentralTax{}

// let g =new Goa();
// console.log(g.tax);

// let o = new Odisha();
// console.log(o.tax);//here overriding is occuring as there is tax in Odisha
// console.log(o);
// let k= new Karnataka();
// console.log(k.tax);

//Here we are using the fat arrow function
class CentralTax{
    tax=18;
    get_CentralTax = () =>{
        var discount= 5;
        return this.tax - discount;
    };
}
class Goa extends CentralTax{}

let g =new Goa();
console.log(g.tax);
console.log(g.get_CentralTax());


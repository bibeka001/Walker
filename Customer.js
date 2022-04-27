class Customer{
    constructor(cust_No, cust_Name, cust_age, address){
        this.cust_No= cust_No;
        this.cust_Name= cust_Name;
        this.cust_age= cust_age;
        this.address= address;
    }
}
let c1= new Customer(
    101,
    "Rajesh",
    24,
    new Address("14", "Marathali" , "Banglore", 123456, "Marathali Bridge")
);
console.log(c1);
Customer= require('./address');

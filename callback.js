
// let employees = [
//     { id: 101, name: "Bikram", salary: 50000 },
//     { id: 102, name: "Bidya", salary: 60000 },
//   ];
//   let createNewEmployee = (employee, callback) => {
//     setTimeout(() => {
//       employees.push(employee);
//       callback(); 
//       // console.log(employee);
//     }, 3000);
//   };
//   let getEmployees = () => {
//     setTimeout (() => {
//       let employeeRows = "";
//       employees.forEach((employee) => {
//         employeeRows += `<tr>
//           <td> ${employee.id}</td>
//           <td> ${employee.name}</td>
//           <td> ${employee.salary}</td></tr>`;
//       });
//       document.querySelector("#table-body").innerHTML = employeeRows;
//     }, 1000);
//   };
//   createNewEmployee({ id: 104, name: " Satya", salary: 80000 }, getEmployees);
//   // createNewEmployee({ id: 108, name: "Jayant", salary: 65000 });
//   getEmployees();

//here invoking a function, passing object and function as argument known as callback function

let sample =(a, b, c, d, callback) =>{
    callback(b,d);
};
let getDetails = (name, array) =>{
    console.log("Name:", name, "array:", array);
};
sample(10, "Ajay", [45,45], {id:101, loc:"Banglore"}, getDetails);



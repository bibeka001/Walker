//for loop
// let emp_No = [101, 102, 103, 104];
// for (let i = 0; i<= emp_No.length-1; i++){
//     console.log(emp_No[i]);
// }

//map method
//  let num =[1, 2, 3, 4, 5];
//  let x = num.map((value) => {
//      console.log(value);
//      return value;
//  });
//  console.log(x);

let allSizes = [23, 25,64, 67];

    let newSizes = allSizes.map((size) =>{
    
        return size + 4;
    });
console.log(newSizes);

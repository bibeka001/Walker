// let shirts = [
//     {productName: "shirtone", size: 48, price:500},
//     {productName: "shirttwp", size: 44, price:600},
//     {productName: "shirthree", size: 40, price:700},
//     {productName: "shirtfour", size: 41, price:1100},
//     {productName: "shirtfive", size: 45, price:1500},
// ];
// let offerShirts= [];
// for (let i=0; i<shirts.length; i++ ){ // for loop is being used
//     if (shirts[i].price > 1000){
//         offerShirts.push(shirts[i]);
//     }
// }
// console.log(offerShirts);

//filter method
// let newOffer =shirts.filter((value) => {
//     return value.price> 600;

// });
// console.log(newOffer);
//MAP METHOD
// let newOffer= shirts.map((value) =>{

//     return value.price> 600;
// });
// console.log(newOffer);

//FOR EACH METHOD

// let newOffer= shirts.forEach((value) =>{

//     return value.price> 600;
// });
// console.log(newOffer);


[12, 53, 34].reduce((total, value) => {return total+value})
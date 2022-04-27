// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

function x(){
    var a=7;
    return function y(){
        console.log(a);
    }
}
var z= x();
console.log(z);
x();



// function x(){
//     var i= 1;
//     setTimeout(function () {
//         console.log(i);
//     }, 2000);
//     console.log("namaste")
// }
// x();
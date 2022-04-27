

function x(){
    for(let  i = 1; i<= 5; i++){
        setTimeout(function() {
            console.log(i);
        }, i* 1000);
    }
    console.log("namaste")
}

x();


let x= 23;
function y(){
    setTimeout(function() {
        for(i = 1; i<=8; i++)
        console.log('hey dude')
    }, i *2000);
}
y();

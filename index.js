let a = true;
let b = false;
let c = true;

function condicion(){
    if(a&&b){
        console.log("Do something");
    }else if(c){
        console.log("Do somethingTwo");
    }
}
condicion();
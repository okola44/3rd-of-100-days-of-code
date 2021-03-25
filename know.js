let x=10;
function timesTen(a){
    return a*10;

}
let y=timesTen(x);//assigning the value of x to y
console.log(y);

function foo(){
    foo();
}
foo();
let count=0;
function myCounter(){
    console.log(count++);
    setTimeout(myCounter,1000);
}
myCounter()
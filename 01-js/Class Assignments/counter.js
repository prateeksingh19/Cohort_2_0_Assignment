let i=30;
function counter(){
    if(i>0){
        console.log(i);
        i--;
    }
    if(i==0){
        console.log(i);
        console.log("counter Completed");
        clearInterval(ans);
    }
}

const ans = setInterval(counter, 1);
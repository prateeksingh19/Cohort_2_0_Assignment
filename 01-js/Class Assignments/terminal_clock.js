let hour=0;
let minute=0;
let second=0;
function counter(){
  console.log(String(hour).padStart(2,'0') + ":" + String(minute).padStart(2,'0') + ":" + String(second).padStart(2,'0'));
  second++;
  if(second==60){
    minute++;
    console.log(`${minute} minute completed`);
    k=0;
  }
  if(minute==60){
    hour++;
    console.log(`${i} hour completed`);
    minute=0;
  }
  if(hour==24){
    clearInterval(ans);
    console.log("Day Completed.")
  }
}
const ans = setInterval(counter,1000);
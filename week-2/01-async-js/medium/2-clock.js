function myTime() {
    let p = new Date();
    let hr = p.getHours();
    let min = p.getMinutes();
    let sec = p.getSeconds();
    console.log(String(hr).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0'));

}
setInterval(myTime, 1000)

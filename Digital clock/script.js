var hour = document.getElementById("hour")
var minute = document.getElementById("minute")
var second = document.getElementById("second")
var ampm = document.getElementById("ampm")

function updatetime()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    
    if(h > 12)
    {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h ;
    m = m < 10 ? "0" + m : m ;

    hour.innerText = h
    minute.innerText = m
    second.innerText = s
    ampm, (innerText = ampm)
    
   setTimeout(()=>{
    updatetime()
   }, 1000)
}
updatetime()

const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minsEl =document.getElementById('mins');
const secondsEl =document.getElementById('seconds');





const newYears = "14 Feb 2024";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    

    const totalSeconds = (newYearsDate- currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) %24;
    const minutes = Math.floor(totalSeconds/ 3600) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

 daysEl.innerHTML= days;

 hoursEl.innerHTML= formatTime(hours);
 minsEl.innerHTML = formatTime(minutes);
 secondsEl.innerHTML= formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? `0${time}`:time;
}
//intial call
countdown();

setInterval(countdown, 1000);


const link = document.getElementById('.link');
function myfuction(){
    link.onclick('www.google.com')
}

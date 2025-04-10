function ClockStart(){

    // Get the current date and time
    now = new Date();
    Hours = now.getHours().toString().padStart(2, 0);
    Minutes = now.getMinutes().toString().padStart(2, 0);  
    Seconds = now.getSeconds().toString().padStart(2, 0);
    document.getElementById("clock").textContent = Hours + ":" + Minutes + ":" + Seconds;
}

ClockStart();
setInterval(ClockStart, 1000);
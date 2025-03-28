stopwatch = document.getElementById("stopwatch");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

function start(){
    if(!running){
        startTime = new Date() - elapsedTime;
        timer = setInterval(update, 10);
        running = true;
    }
}
function stop(){
    if(running){
        clearInterval(timer);
        elapsedTime = new Date() - startTime;
        running = false;
    }
}
function reset(){
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    startTime = 0;
    stopwatch.textContent = "00:00:00:00";
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");
    stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

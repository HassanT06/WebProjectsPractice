
let orihime;
let count = 0;
document.getElementById("count1").textContent = count
document.getElementById("b1").onclick = function(){
    count -=1
    document.getElementById("count1").textContent = count
}
document.getElementById("b3").onclick = function(){
    count +=1
    document.getElementById("count1").textContent = count
}
document.getElementById("b2").onclick = function(){
    count = 0
    document.getElementById("count1").textContent = count
}
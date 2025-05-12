document.getElementById("b1").onclick = function(){

    rng1 = Math.floor((Math.random()*6)+1)
    document.getElementById("l1").textContent = rng1
    rng2 = Math.floor((Math.random()*6)+1)
    document.getElementById("l2").textContent = rng2
    rng3 = Math.floor((Math.random()*6)+1)
    document.getElementById("l3").textContent = rng3
}
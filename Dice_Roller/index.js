let values =[]
let images =[]

function rolldice(){

    const numOfDice = document.getElementById("NumOfDice").value

    for(let i = 0; i<numOfDice; i++ ){
        let value = Math.floor(Math.random()*6)+1
        values.push(value)
        console.log(values)
    }

}
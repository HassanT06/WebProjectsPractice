function rolldice() {
    const numOfDice = document.getElementById("NumOfDice").value;
    const DiceResult = document.getElementById("DiceResult");
    const ImagesResult = document.getElementById("ImagesResult");
    const numOfSides = document.getElementById("NumOfSides").value;
    let values = [];
    let images = [];

    for (let i = 0; i < numOfDice; i++) {
        let value = Math.floor(Math.random() * numOfSides) + 1;
        values.push(value);
        images.push(`<img src="Images/Pin${value}.png" alt="Dice ${value}">`);
        console.log(images);
    }
    DiceResult.textContent = "Dice Rolled: " + values;
    ImagesResult.innerHTML = images.join("");
}
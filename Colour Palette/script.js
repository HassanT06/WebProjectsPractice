newColour = document.getElementById("new");
let colour;
let colourtype ="";
newColour.addEventListener("click", event => {
    colour = prompt("Enter a colour value: (rgb=255,0,0) (hex=#ff0000) (hsl=0,100%,50%)");
    if (colour != null && colour != "") {
        // Check colour
        switch (true){
            case (colour.includes("%") && colour.includes(",")):
                console.log("hsl colour value detected.");
                break;
            case (colour.includes(",")):
                console.log("rgb colour value detected.");
                break;
            case (colour.includes("#")):
                console.log("hex colour value detected.");
                break;
            default:
                alert("Please enter a valid colour value.");
                return;
        }

        document.body.style.backgroundColor = colour;
        console.log(document.body.style.backgroundColor)
    }
    else {
        alert("Please enter a valid colour value.");
    }

})
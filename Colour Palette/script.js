let newColour = document.getElementById("new");
let Container = document.getElementById("Container");
let colour;
let colourtype ="";
newColour.addEventListener("click", event => {
    colour = prompt("Enter a colour value: (rgb=255,0,0) (hex=#ff0000) (hsl=0,100%,50%)");
    let colourBlock = document.createElement("div");
    colourBlock.className = "colours";
    let children = Container.children;
    if (children.length > 0) {
        Container.insertBefore(colourBlock,children[children.length-1]);
    }
    else {
        Container.appendChild(colourBlock);
    }
    if (colour != null && colour != "") {
        // Check colour
        switch (true){
            case (colour.includes("%") && colour.includes(",")):
                console.log("hsl colour value detected.");
                colourBlock.style.backgroundColor = `hsl(${colour})`;
                break;
            case (colour.includes(",")):
                console.log("rgb colour value detected.");
                colourBlock.style.backgroundColor = `rgb(${colour})`;
                break;
            case (colour.includes("#")):
                console.log("hex colour value detected.");
                colourBlock.style.backgroundColor = `${colour}`;
                break;
            default:
                alert("Please enter a valid colour value.");
                return;
        }
        console.log(colour);
        
        console.log(document.body.style.backgroundColor)
    }
    else {
        alert("Please enter a valid colour value.");
    }

})
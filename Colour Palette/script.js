let newColour = document.getElementById("new");
let Container = document.getElementById("Container");
let colour;
//let colourtype ="";
let colourBlock;
let colourText;

const cssColors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond",
    "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey",
    "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro",
    "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred",
    "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon",
    "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime",
    "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink",
    "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon",
    "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey",
    "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ];

newColour.addEventListener("click", event => {
    colour = prompt("Enter a colour value: (rgb=255,0,0) (hex=#ff0000) (hsl=0,100%,50%)");
    if (colour !=null  &&  colour!=""){
        colourBlock = document.createElement("div");
        colourBlock.className = "colours";
        colourText = document.createElement("span");
        colourText.className = "colour-text";    
    }
    
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
                colourText.textContent = `HSL:(${colour.trim()})`;
                break;
            case (colour.includes(",")):
                console.log("rgb colour value detected.");
                colourBlock.style.backgroundColor = `rgb(${colour})`;
                colourText.textContent = `RGB:(${colour.trim()})`;
                break;
            case (colour.includes("#")):
                console.log("hex colour value detected.");
                colourBlock.style.backgroundColor = `${colour}`;
                colourText.textContent = `HEX:#${colour.trim()}`;
                break;
            case (cssColors.includes(colour)):
                console.log("css name colour value detected.");
                colourBlock.style.backgroundColor = `${colour}`;
                colourText.textContent = `${colour.trim()}`;
                break;
            default:
                alert("Please enter a valid colour value.");
                colourBlock.remove();
                return;
        }
        colourBlock.appendChild(colourText);
        colourBlock.title = colour;
    }
    else {
        alert("Please enter a valid colour value.");
    }
})

Container.addEventListener("click", event => {
    if (event.target.className === "colours") {
        copyText = event.target.querySelector(".colour-text").textContent;
        navigator.clipboard.writeText(copyText);
        alert("Colour value copied to clipboard: " + copyText);
    }})
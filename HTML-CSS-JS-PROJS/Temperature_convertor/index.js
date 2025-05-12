const textbox = document.getElementById("TempV");
const CF = document.getElementById("toFarenheight");
const FC = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
   
    if (CF.checked){
        temp = Number(textbox.value);
        temp = temp *9/5 + 32;
        result.textContent = temp.toFixed(1) + "F"
    }
    else if (FC.checked){
       temp = Number(textbox.value);
       temp= (temp- 32)* (5/9)
       result.textContent = temp.toFixed(1) + "C"
        
    }
    else{
        result.textContent = "Select a unit now.";
    }


}
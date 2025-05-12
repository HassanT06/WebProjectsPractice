function GeneratePassword(){
    let length = document.getElementById("length").value;
    let uppercase = document.getElementById("upper").checked;
    let lowercase = document.getElementById("lower").checked;
    let numbers = document.getElementById("number").checked;
    let symbols = document.getElementById("symbol").checked;
    let password ="";
    let CharArray="";
    CharArray += (lowercase ? "abcdefghijklmnopqrstuvwxyz" : "");
    CharArray += (uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "");
    CharArray += (numbers ? "0123456789" : "");
    CharArray += (symbols ? "!@#$%^&*()_+-=[]{}|;':,.<>?/" : "");
    for (let i = 0; i < length; i++){
        let index = Math.floor(Math.random() * CharArray.length);
        password += CharArray.charAt(index);
    }
    if (CharArray.length === 0){
        alert("Please select atleast one option");
        return;
    }


    document.getElementById("l3").textContent = "Your Generated Password is: " + password;
}

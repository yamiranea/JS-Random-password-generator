const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 15
let generateNewPsd = false
let psd1El = document.getElementById("psd1-el")
let psd2El = document.getElementById("psd2-el")
let generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", function generatePsd(){
    if (generateNewPsd === true){
        psd1El.textContent = ""
        psd2El.textContent = ""
    }
    for (i=0; i < passwordLength; i++){
        let randomIndexA = Math.floor( Math.random() * characters.length )
        let randomIndexB = Math.floor( Math.random() * characters.length )
        psd1El.textContent += characters[randomIndexA]
        psd2El.textContent += characters[randomIndexB]
     }
 generateNewPsd = true
}
)


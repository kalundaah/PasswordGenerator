let store = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","&",
"*","_","-"]
let key1 =""
let key2 =""
let storelen = store.length
let randomIndex = Math.floor(Math.random()*storelen) 
let lenval = document.getElementById("length")
let out1 =  document.getElementById("o1")
let out2 = document.getElementById("o2")

function generatePassword(){
    key1=""
    key2=""
    for ( let i = 0; i < lenval.value; i++)
    {
        randomIndex = Math.floor(Math.random()*storelen) 
        key1 += store[randomIndex]
        key2 += store[randomIndex]
    }
    out1.textContent = key1
    out2.textContent = key2
}


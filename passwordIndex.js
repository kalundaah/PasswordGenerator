let store = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","&",
"*","_","-"]
let key1 =""
let key2 =""
let randomIndex = Math.floor(Math.random()*store.length) 
document.getElementById("generate-btn").addEventListener("click",function(){
    generatePassword()
})

function generatePassword(){
    for ( let i = 0; i < document.getElementById("length").value; i++)
    {
        key1 += store[randomIndex]
        key2 += store[randomIndex]
    }
    document.getElementById("o1").textContent = key1
    document.getElementById("o2").textContent = key2
    document.getElementById("length").value = ""
}

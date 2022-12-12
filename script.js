const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let out1 = document.getElementById('pass1')
let out2 = document.getElementById('pass2')
let includeSpecial = true
let includeNums = true
let specialCheck = document.getElementById('special')
let numCheck =  document.getElementById('numbers')


function excNums(){
    includeNums = false
    numCheck.classList.add('checked')
}

function excSpecial(){
    includeSpecial = false
    specialCheck.classList.add('checked')
}




function generatePasswords(){
    out1.textContent = ""
    out2.textContent = ""
    q = prompt("How long do you want your password?")
    if (specialCheck.checked && numCheck.checked) {
        let onlyLetters = characters.slice(1,52)
        for (var i = 0; i < q; i ++){
            var ind = Math.floor(Math.random() * onlyLetters.length)
            out1.textContent += onlyLetters[ind]
            }
            for (var j = 0; j < q; j ++){
                var ind2 = Math.floor(Math.random() * onlyLetters.length)
                out2.textContent += onlyLetters[ind2]
            }

        } else if (specialCheck.checked) {
            let noSpecial = characters.slice(1,62)
            for (var i = 0; i < q; i ++){
                var ind = Math.floor(Math.random() * noSpecial.length)
                out1.textContent += noSpecial[ind]
                }
                for (var j = 0; j < q; j ++){
                    var ind2 = Math.floor(Math.random() * noSpecial.length)
                    out2.textContent += noSpecial[ind2]
                }
        
        } else if (numCheck.checked) {
            let noNums = characters.slice(1,52)+characters.slice(62,characters.length)
            for (var i = 0; i < q; i ++){
                var ind = Math.floor(Math.random() * noNums.length)
                out1.textContent += noNums[ind]
                }
                for (var j = 0; j < q; j ++){
                    var ind2 = Math.floor(Math.random() * noNums.length)
                    out2.textContent += noNums[ind2]
                }
        } else {
        for (var i = 0; i < q; i ++){
        var ind = Math.floor(Math.random() * characters.length)
        out1.textContent += characters[ind]
        }
        for (var j = 0; j < q; j ++){
            var ind2 = Math.floor(Math.random() * characters.length)
            out2.textContent += characters[ind2]
        } 
    }
}

function copy(){
    let toCopy = out1.innerText;
  navigator.clipboard.writeText(toCopy);

  // Alert the copied text
  alert("Copied the text: " + toCopy);

}

function copy2(){
    var toCopy = out2.innerText;
  navigator.clipboard.writeText(toCopy);

  // Alert the copied text
  alert("Copied the text: " + toCopy);

}

function checkbox(){

}
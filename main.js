
let roll = function(n) {
    let randomNumElement = document.createElement("p")
    let textNodeP = document.createTextNode(n)
    randomNumElement.appendChild(textNodeP)
    document.getElementById("dieRoll").appendChild(randomNumElement)
}

let thousandRolls = function() {
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // roll (count)
    let output=0
    for (let i=0; i<1000; i++) {
        if (i<1000) {
            let dieRoll1 = Math.floor((Math.random() * 6) + 1)
            let dieRoll2 = Math.floor((Math.random() * 6) + 1)
            let diceRoll = dieRoll1 + dieRoll2 
            // roll("die#1: " + dieRoll1);
            // roll("die#2: " + dieRoll2);
            // roll("Roll# " +i + ": " + diceRoll)
        console.log("Roll# " +i + ": " + diceRoll)
        output= output + diceRoll + ","
        count[diceRoll] = count[diceRoll] + 1;
        }
        // tArray = output.split(",")
        // console.log(output)
    }

    for (let i=0; i<=count.length-1; i++){
        roll(i + ": " + count[i])
    }
}

thousandRolls()







let randomNumElement
let roll = function(n) {
    randomNumElement = document.createElement("span")
    let textNodeP = document.createTextNode(n)
    randomNumElement.appendChild(textNodeP)
    document.getElementById("dieRoll").appendChild(randomNumElement)
}

// let thousandRolls = function() {
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i=0; i<1000; i++) {
        if (i<1000) {
            let dieRoll1 = Math.floor((Math.random() * 6) + 1)
            let dieRoll2 = Math.floor((Math.random() * 6) + 1)
            let diceRoll = dieRoll1 + dieRoll2 
            // roll("die#1: " + dieRoll1);
            // roll("die#2: " + dieRoll2);
            // roll("Roll# " +i + ": " + diceRoll)
        console.log("Roll# " +i + ": " + diceRoll)
        count[diceRoll] = count[diceRoll] + 1;
        }
    }
    console.log(count)

    for (let i=0; i<=count.length-1; i++){
        let barLength=count[i];
        console.log(barLength)
        roll("Dice Roll total: " +i)
        roll(barLength);
        randomNumElement.style.width= barLength + "px";
    }
    





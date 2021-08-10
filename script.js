let possibleColors = ["Green ","Blue ","Yellow ","Red "]
let possibleNumbers = [1,2,3,4,5,6,7,8,9]
let currentPlay = []
let hand = []

let shuffle = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]

let card1 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card2 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card3 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card4 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card5 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card6 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card7 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]

hand.push(card1,card2,card3,card4,card5,card6,card7)

console.log(hand)

let currentHand = window.prompt("Your cards are " + hand)
console.log(currentHand)
currentPlay = currentHand


if (currentHand === card1){
    hand.splice(0,1)
    console.log(hand)
} else if (currentHand === card2){
    hand.splice(1,1)
    console.log(hand)
} else if (currentHand === card3){
    hand.splice(2,1)
    console.log(hand)
} else if (currentHand === card4){
    hand.splice(3,1)
    console.log(hand)
} else if (currentHand === card5){
    hand.splice(4,1)
    console.log(hand)
} else if (currentHand === card6){
    hand.splice(5,1)
    console.log(hand)
} else if (currentHand === card7){
    hand.splice(6,1)
    console.log(hand)
} else if (currentHand !== hand){
    alert("You lose. Typing in an invalid card results to loss!")
    currentPlay = "You Lose!"
}


// if (currentHand === "Green 2"){
//     hand = card2
//     let system = window.prompt("Uno! Your cards are " + hand)
// } else if (currentHand === "Blue 8") {
//     hand = card1
//     let system2 = window.prompt("Uno! Your cards are " + hand)
// }
// else {
//     let system3 = window.prompt("Wrong card")
// } 
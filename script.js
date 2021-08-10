//Randomly generates all possible uno cards with arrays
let possibleColors = ["Green ","Blue ","Yellow ","Red "]
let possibleNumbers = [1,2,3,4,5,6,7,8,9]
//The display for the text on the website to show what card you played and whats currently playing
let currentPlay = []
//The hand you play with. An empty array that gets 7 card added too
let hand = []

//Randomly Generates all 7 cards
let card1 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card2 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card3 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card4 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card5 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card6 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let card7 = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]

//By pushing this hand. all 7 cards that got assigned random numbers gets put into the empty hand (array)
hand.push(card1,card2,card3,card4,card5,card6,card7)

console.log(hand)

let currentHand = window.prompt("Your cards are " + hand)
console.log(currentHand)
currentPlay = currentHand


//cannot use if over and over with vague conditions like currentHand === card2. It will then count the losing trigger??? 
//So adding else if after the initial if statement will make the condition less vague?

if (currentHand === card1){
    hand.splice(0,1)
    console.log(hand)
    let system = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
    currentPlay = system
    if (currentPlay = system){
       let currentHand = window.prompt("The current played card is " + currentPlay + "." + " Your cards are " + hand) 
       if (currentHand === card2) {
        if (card2 === possibleColors[1]){
            hand.splice(0,1)
            console.log(hand)
        } else if (card2 !== possibleColors[1]){
            alert("You lose. Typing in an invalid card results to loss!")
            currentPlay = "You Lose!"
        }
       }
    }
} else if (currentHand === card2){
    hand.splice(1,1)
    console.log(hand)
    let system = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
    currentPlay = system
} else if (currentHand === card3){
    hand.splice(2,1)
    console.log(hand)
    let system = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
    currentPlay = system
} else if (currentHand === card4){
    hand.splice(3,1)
    console.log(hand)
    let system = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
    currentPlay = system
} else if (currentHand === card5){
    hand.splice(4,1)
    console.log(hand)
    let system = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
    currentPlay = system
} else if (currentHand === card6){
    hand.splice(5,1)
    console.log(hand)
    let system = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
    currentPlay = system
} else if (currentHand === card7){
    hand.splice(6,1)
    console.log(hand)
    let system = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
    currentPlay = system
} else if (currentHand !== hand){
    alert("You lose. Typing in an invalid card results to loss!")
    currentPlay = "You Lose!"
}
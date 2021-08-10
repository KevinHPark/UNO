let possibleColors = ["Green ","Blue ","Yellow ","Red "]
let possibleNumbers = [1,2,3,4,5,6,7,8,9]
let hand = []

let card = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]

for (let system = 0; system = 7; system++){
    let cards = card[system]
}

hand.push(card,card,card,card,card,card,card)

console.log(hand)
//  let hand = [card, card2]
//  let currentHand = window.prompt("Your cards are " + hand)
// console.log(currentHand)

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
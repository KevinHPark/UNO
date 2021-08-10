let possibleColors = ["Green ","Blue ","Yellow ","Red "]
let possibleNumbers = [1,2,3,4,5,6,7,8,9]

let card = possibleColors[Math.floor(Math.random()*possibleColors.length)] + possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
let hand = []
for (var currentCard = 0; currentCard === 7; currentCard++){
    hand.push(card[0])
    currentCard++
}

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
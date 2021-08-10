//Randomly generates all possible uno cards with arrays
let possibleColors = ["Green ", "Blue ", "Yellow ", "Red "]
let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//The hand you play with. An empty array that gets 7 card added too
let hand = []

//Randomly Generates all 7 cards
for (let i = 0; i < 8; i++) {
    let card = possibleColors[Math.floor(Math.random() * possibleColors.length)] + possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)]

    hand.push(card)
}

//Shows what you have
console.log(hand)

let currentPlay = possibleColors[Math.floor(Math.random() * possibleColors.length)] + possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)]
//Here
function PlaceCard(currentHand) {
    //i is number in array. SO the loop SHOULD end when there are no more cards
    for (let i in hand) {
      let cardName = hand[i]
      let cardNumberInTable = i

      //currentHand is user input. So if userinput the correct card they have that matches the card in their deck
      if (currentHand.toLowerCase() === cardName.toLowerCase()) {
        // SO /(\d+)/ is apparently to find numbers. numbersInText gets the number of the uno card. So if I type "green 7". It takes the 7
        let numbersInText = currentHand.match(/(\d+)/)
        let numbersInCurrentCardOnTable = currentPlay.match(/(\d+)/)

        
        let currentHandCOLOR = currentHand.replace(/\d+/g, '');
        let currentPlayCOLOR = currentPlay.replace(/\d+/g, '');

        //DEBUGGING CUZ IT WONT WORKKKK
        console.log("Color matches state : Hand = " + currentHandCOLOR + " Table = " + currentPlayCOLOR)
        console.log("Both color matches = " + (currentHand.toLowerCase() === currentPlay.toLowerCase()))
        console.log("Number match state : Hand = " + numbersInText + " Table = " + numbersInCurrentCardOnTable)
        console.log("Both Numbers match = " + (numbersInText === numbersInCurrentCardOnTable))

        //toString is to get the color. The one above takes the number, the one below takes the color
        //So how this loop SHOULD WORK is the first part matches the card on the table color and the card you're trying to place
        //AND it also checks the number of the card on the table and the number of the card you're trying to place
        // .toLowerCase() just makes it so you dont have to be cap sensitive when typing the card. like "yellow 6" works and fills in for "Yellow 6"
        if (currentHandCOLOR.toLowerCase() === currentPlayCOLOR.toLowerCase() || numbersInText === numbersInCurrentCardOnTable) {
          console.log("Placed card " + currentHand)
          hand.splice(cardNumberInTable, 1)
          console.log("Cards in your hand : " + hand)
        }
      }
    }
    currentHand = window.prompt("Your cards are " + hand)
    PlaceCard(currentHand);
    return false
  }

  currentHand = window.prompt("Your cards are " + hand)
  PlaceCard(currentHand);
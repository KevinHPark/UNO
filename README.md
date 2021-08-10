# UNO

Info
- The background is basically for show. I couldnt get the text to work or figure it out at all. The entire game is ran off of window.prompt.
- Start time: 9 pm - Finish time: 7:50 am

How to play
- Type in the card that corresponds with the "current card"
- The condition to match the cards are either the same color or the same number
- I made it so cap sensitive is not a thing so "yellow 2" is the same as "Yellow 2"
- You draw a card by typing in the card you cant place. So for example: "Current Card: Green 2" I have "blue 3" and nothing else. So I just type in "Blue 3" and it will draw a card.
- There is no endgame screen. I am tired. It ends with it shows that you have no more cards left, or bascially "Your cards are     "

What I learned
**JAVASCRIPT**
- Check out the notes in my code. I wrote notes down as i went so I wouldnt go back and forget what the properties did
- "/\D/g, ''" for whatever reason is finding numbers. So when there is a string with a number, you can use this to get only the number from the string.
- .toLowerCase() was very helpful and a neat trick I found. Its so the answer wouldnt be cap sensitive.
- splice(0,0) is a big part of this project imo. When I finally found out how to use it, it was god tier. You can fill in the first digit for variables as well.
- [Math.floor(Math.random()] is your best friend for your random needs
- (let i in hand) is an interesting loop method I found.  By creating a new variable i and placing it in hand (which is an array). Now the entire loop condition is to go through the entire hand(array). So in this case. When the loop goes through all the cards in your hand.

**CSS**
- I learned a lot of CSS too. Infact I got carried away. I wish i figured out how to do easing on the background for more friendly look but the best I could do is 30 seconds loop timer so the colors switch slowly. 
- I created a bunch of shadow to have a more boxy bold on the words. Thats how I got uno to look that way. 
- @keyframes basically are functions.
- transform is all you need B)
- percentage is a huge part of the animation process
- animation-iteration-count is a loop when set to infinity

**HTML**
- I learned nothing. Just one mistake was made in html and that was not connecting files.

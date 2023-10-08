
let cards = []
let sum = 0 ;



let hasBlackJAck = false,
isAlive = false;

let message ="" ;
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl= document.querySelector(".name-el");

let player = {
    name : "Ndamu",
    chips : 1000
}

playerEl.textContent = player.name+ ": R" + player.chips;

function getRandomCard(){
    
    let randomNumbers= Math.floor(Math.random()*13) + 1;
    if(randomNumbers > 10){
        return 10
    }
    else if(randomNumbers === 1){
        return 11
    }
    else{
        return randomNumbers;
    }
}
function renderGame(){
    
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if(sum < 21){
        message = "Do you want to draw a new card 🃏"

    } else if(sum === 21){
        message ="You've got BlackJAck 🎉"
        hasBlackJAck = true;
    } else{
        message = "You are out of the game 😪"
        isAlive = false;
    }
   
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard ;
    isAlive = true
    renderGame()
}

function newCard(){
    
    if(isAlive === true && hasBlackJAck === false){
        let card = getRandomCard()
        sum +=card
        cards.push(card)
    }

    renderGame()
}
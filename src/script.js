'use strict';

let score_p1 = 0;
let score_p2 = 0;

let previous_score_p1 = 0;
let previous_score_p2 = 0;

let active_player = 1;

let roll_dice;

//! Generate random roll dice
const generateRollDice = function() {
    roll_dice = Math.floor(Math.random() * 6)+1;
};

//! Display the Score
const displayScore = function() {
    document.getElementById(`score_p1`).textContent = score_p1;
    document.getElementById(`score_p2`).textContent = score_p2;
    document.getElementById(`previous_score_p1`).textContent = previous_score_p1;
    document.getElementById(`previous_score_p2`).textContent = previous_score_p2;
}

//! Change the visual of the players screen
const resetVisual = function() {
    const player1Container = document.getElementById('player1_container');
    const player2Container = document.getElementById('player2_container');

    if (active_player === 1) {
        player1Container.classList.remove('bg-opacity-65');
        player1Container.classList.add('bg-opacity-35');
        player2Container.classList.remove('bg-opacity-35');
        player2Container.classList.add('bg-opacity-65');
    } else {
        player2Container.classList.remove('bg-opacity-65');
        player2Container.classList.add('bg-opacity-35');
        player1Container.classList.remove('bg-opacity-35');
        player1Container.classList.add('bg-opacity-65');
    }
}

//! Change the player
const switchPlayer = function() {

    if (active_player === 1) {
        resetVisual();
        previous_score_p1 = 0;
    } else {
        resetVisual();
        previous_score_p2 = 0;
    }
    active_player = active_player === 1 ? 2 : 1;

    displayScore();
};

//! Function to switch the roll image
const switchImgDice = function(roll) {
    document.getElementById('dice').src = `images/dice-${roll}.png`
};

//! Function for the "Roll Dice" Button
const rollDiceHandler = function () {

    generateRollDice();
    console.log(roll_dice);
    switchImgDice(roll_dice);

    if(roll_dice === 1) {
        switchPlayer();
    } else {
        active_player === 1 ? previous_score_p1 += roll_dice : previous_score_p2 += roll_dice;
    }
    displayScore();
};

//! Function to hold and sum the previous score
const holdHandler = function () {
    if(active_player === 1) {
        score_p1 += previous_score_p1;
        if(score_p1 >= 100) {
            alert('Player 1 Wins!');
            resetGame();
            return;
        } 
    } else {
        score_p2 += previous_score_p2;
        if(score_p2 >= 100) {
            alert('Player 2 Wins!')
            resetGame();
            return;
        }
    }
    switchPlayer();
};

//! Function to reset the game
const resetGame = function () {
    score_p1 = 0;
    score_p2 = 0;
    previous_score_p1 = 0;
    previous_score_p2 = 0;
    resetVisual();
    active_player = 1;
    
    document.getElementById('dice').src = `images/dice-1.png`
    
    displayScore();
};

document.getElementById('roll').addEventListener('click', rollDiceHandler);
document.getElementById('hold').addEventListener('click', holdHandler);
document.getElementById('restart').addEventListener('click', resetGame);
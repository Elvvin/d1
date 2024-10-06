const cardsArray = [
    { name: 'A', image: 'img/card1.png', matched: false },
    { name: 'B', image: 'img/card2.png', matched: false },
    { name: 'C', image: 'img/card3.png', matched: false },
    { name: 'D', image: 'img/card4.png', matched: false },
    { name: 'E', image: 'img/card5.png', matched: false },
    { name: 'F', image: 'img/card6.png', matched: false },
    { name: 'G', image: 'img/card7.png', matched: false },
    { name: 'H', image: 'img/card8.png', matched: false }
];

const matchSound = document.getElementById('match-sound');
const noMatchSound = document.getElementById('no-match-sound');
const gameOverSound = document.getElementById('gameover-sound');

let cards = [...cardsArray, ...cardsArray];
cards = shuffle(cards);

let firstCard = null;
let secondCard = null;
let moves = 0;
let timeStarted = false;
let timerInterval = null;

const gameBoard = document.getElementById('game-board');
const movesElement = document.getElementById('moves');
const timeElement = document.getElementById('time');

cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.name = card.name;
    
    const imgElement = document.createElement('img');
    imgElement.src = card.image;
    imgElement.alt = card.name;
    imgElement.classList.add('card-image');
    imgElement.style.visibility = "hidden";
    
    cardElement.appendChild(imgElement);
    gameBoard.appendChild(cardElement);

    cardElement.addEventListener('click', () => {
        if (!timeStarted) {
            startTimer();
            timeStarted = true;
        }
        flipCard(cardElement);
    });
});


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function flipCard(cardElement) {
    if (firstCard && secondCard || firstCard === cardElement) return;

    cardElement.classList.add('flipped');
    const img = cardElement.querySelector('.card-image');
    if(img){
        img.style.visibility = "visible";
    } else {
        cardElement.style.visibility = "visible";
    }

    if (!firstCard) {
        firstCard = cardElement;
    } else {
        secondCard = cardElement;
        checkForMatch();
    }
}


function checkForMatch() {
    moves++;
    movesElement.innerText = moves;
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;
    
    if (isMatch) {
        matchSound.play()
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard.style.opacity = "0.1";
        secondCard.style.opacity = "0.1";
        resetCards();
        checkGameOver();
    } 
    else {
        noMatchSound.play()
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            const firstImg = firstCard.querySelector('.card-image');
            const secondImg = secondCard.querySelector('.card-image');
            if(firstImg){
                firstImg.style.visibility = "hidden";
            }
            if(secondImg){
                secondImg.style.visibility = "hidden";
            }
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}

function startTimer() {
    let seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timeElement.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function checkGameOver() {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === cards.length) {
        gameOverSound.play()
        clearInterval(timerInterval);
        setTimeout(() => {
            alert('Oyun bitdi!');
        }, 500); 
    }
}

document.getElementById('restart').addEventListener('click', () => {
    window.location.reload();
});
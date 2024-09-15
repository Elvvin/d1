//! Game 1

// let lives = 5;
// let myScore = 0;

// function getComputerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// function getUserChoice() {
//     let choice;
//     while (true) {
//         choice = prompt("Qaya, kağız, və ya qayçı daxil edin: (İngiliscə)").toLowerCase();
//         if (['rock', 'paper', 'scissors'].includes(choice)) {
//             return choice;
//         } else {
//             alert("Yanlış seçim. Zəhmət olmasa, qaya, kağız, və ya qayçı daxil edin. (İngiliscə)");
//         }
//     }
// }

// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         console.log("Bərabərə qaldınız!");
//     } else if (
//         (userChoice === 'rock' && computerChoice === 'scissors') ||
//         (userChoice === 'scissors' && computerChoice === 'paper') ||
//         (userChoice === 'paper' && computerChoice === 'rock')
//     ) {
//         myScore++;
//         console.log(`Bu raundu qazandınız! Cari xalınız: ${myScore}`);
//     } else {
//         lives--;
//         console.log(`Bu raundu itirdiniz. Cari canınız: ${lives}`);
//     }
// }

// function playGame() {
//     while (lives > 0) {
//         alert(`Qaya, Kağız, Qayçı oyununa xoş gəlmisiniz! Hazırda ${lives} canınız var.`);
//         const userChoice = getUserChoice();
//         const computerChoice = getComputerChoice();
//         alert(`Kompyuter seçdi: ${computerChoice}`);
//         determineWinner(userChoice, computerChoice);
//     }
//     alert(`Oyun bitdi! Sonuncu xalınız: ${myScore}`);
// }

// window.onload = function() {
//     playGame();
// }

//! Game 2

// function numberGuessingGame() {
//     const targetNumber = Math.floor(Math.random() * 50) + 1;
//     let health = 3;
//     let guessedCorrectly = false;

//     while (health > 0 && !guessedCorrectly) {
//         const userGuess = parseInt(prompt(`Təxmin edin: 1-50 arasında bir ədəd daxil edin. Qalan cəhdlər: ${health}`), 10);
//         if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
//             alert("Zəhmət olmasa, 1 ilə 50 arasında bir ədəd daxil edin.");
//             continue;
//         }

//         if (userGuess === targetNumber) {
//             guessedCorrectly = true;
//             alert(`Təbriklər! Düzgün təxmin etdiniz. Seçilen ədəd: ${targetNumber}`);
//         } else {
//             health--;
//             if (health > 0) {
//                 if (userGuess > targetNumber) {
//                     alert("Soyuq");
//                 } else if (userGuess < targetNumber) {
//                     alert("İsti");
//                 }
//                 alert(`Yanlış təxmin! Qalan cəhdlər: ${health}`);
//             } else {
//                 alert(`Oyun bitdi! Təəssüf ki, ədədi tapa bilmədiniz. Seçilen ədəd: ${targetNumber}`);
//             }
//         }
//     }
// }

// window.onload = function() {
//     numberGuessingGame();
// };

//! Game 3
// function numberGuessingGame() {
//     const currentNumber = parseInt(prompt("Bir ədəd daxil edin (1-50):"), 10);

//     if (isNaN(currentNumber) || currentNumber < 1 || currentNumber > 50) {
//         alert("Zəhmət olmasa, 1 ilə 50 arasında bir ədəd daxil edin.");
//         return;
//     }

//     const nextNumber = Math.floor(Math.random() * 100) + 1;

//     const userGuess = prompt("Təxmin edin: İkinci ədəd birinci ədəddən böyükdürsə 'higher', kiçikdirsə 'lower' yazın.");

//     if (userGuess === 'higher' && nextNumber > currentNumber) {
//         alert(`Təbriklər! ${nextNumber} doğru cavabdır. ${currentNumber}-dən böyükdür.`);
//     } else if (userGuess === 'lower' && nextNumber < currentNumber) {
//         alert(`Təbriklər! ${nextNumber} doğru cavabdır. ${currentNumber}-dən kiçikdir.`);
//     } else {
//         alert(`Təkrar cəhd edin! Təsadüfi ədəd ${nextNumber} idi və ${currentNumber}-dən ${nextNumber > currentNumber ? 'böyükdür' : 'kiçikdir'}.`);
//     }
// }

// window.onload = function() {
//     numberGuessingGame();
// };

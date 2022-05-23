
let maximum = parseInt(prompt("Enter the maximun number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
let guess = prompt("Enter your first guess: ");
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess: ");
    }
    else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess: ");
    }
    else {
        guess = prompt(`Your guess is ${guess} which is neither higher nor lower,Please guess a number`);
    }
}
if (guess === 'q') {
    console.log("Ok,You Quit:(");
}
else {
    console.log("Congrats You Win!!");
    console.log(`You got it! It took you ${attempts} guesses`);
}
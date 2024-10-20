// Loops

// For Loop -> If you know how many times to loop
for (let i = 1; i <= 10; i = i + 2){
    console.log('Jaimin ' + i)
}

// While Loop -> We know condition, but how many iterations will require, use while loop!
let initialPosition = 0
let housePosition = 5

// while (initialPosition != housePosition) {
//     initialPosition = initialPosition + 1
//     console.log('Step Taken:' + initialPosition)
// }

// Do While Loop -> Runs the code first, and then condition is checked!
do {
    console.log('No. of Steps Taken: ' + initialPosition)
    initialPosition = initialPosition + 1
} while (initialPosition <= housePosition)




// let's play a game
let number = 40
let guess = 0

do {
    // parseInt Because prompt will return a string. For ex. '1'
    guess = parseInt(prompt("Guess a number: "))
    if (guess == number){
        break;
        alert('Winner')
        
    }
} while (guess != 0)
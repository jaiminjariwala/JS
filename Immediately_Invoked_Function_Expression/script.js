// Immediately Invoked Function Expression (IIFE)
(function add(a, b) {
    console.log(a + b)
})(2, 3)    // we invoked this function on the spot!

// IIFE Syntax according to modern js...
((a,b) => console.log(a + b))(2, 4)


// We can even return a value from IIFE Function
const value = (() => 100)()
console.log(value)



// Use-cases of IIFE
// 1. If we want to use some variable inside a function, keeping it scope local and not global, we can use IIFE...
(() => {
    // some variable initiation code
    let firstVariable;
    let secondVariable;
})();
// firstVariable and secondVariable will be DISCARDED after the function is executed.

// 2. Using Promises more appropriately...
const data = (async () => await fetch())()

// 3. We can use IIFE to create private and public variables and methods
const atm = (function (initialBalance) {
    let balance = initialBalance
    // let's create a closure function
    function withdraw(amount) {
        if (amount > balance) {
            return "Are you kidding?🙄"
        } else {
            balance -= amount
            return balance
        }
    }
    // return an object which will have the "withdraw" function
    return { withdraw }
})
// let's create an account now
const oggy = atm(1000)  // let's say our initial balance is 1000.
console.log(oggy.withdraw(100))
console.log(oggy.withdraw(200))
console.log(oggy.withdraw(500))
// Functions

function sayHello() {
    // directly console. logging inside a function is a BAD PRACTICE.
    console.log("Hey, Jaimin!")
}

//          parameters
function add(a, b) {
    return a + b
}

//          arguments
let p = add(5, 10)
console.log(p)

// ==============================================================




// Exercise: Accept Unlimited Arguments and perform some operation.

// METHOD 1:
function addNumbers() {
    // whenever function receive parameters, js by default, puts into arguments.
    console.log(arguments)  // arguments is basically an object!

    let ans = 0
    for (let i=0; i<arguments.length; i=i+1) {
        ans = ans + arguments[i]
    }
    return ans
}

let result = addNumbers(100, 22, 33, 44, 55)
console.log(result)


// METHOD 2:
// Rest Parameter Syntax allows a function to accept an indefinite number of arguments as an array
//                   rest parameter syntax
function addNumbersV2(...numbers) {
    let ans = 0
    for (let i=0; i < numbers.length; i++) {
        ans = ans + numbers[i]
    }
    return ans
}

let result2 = addNumbersV2(1, 10, 100, 1000, 10000)
console.log(result2)
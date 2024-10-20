// High Order Functions and Callbacks

function add(a, b, cb){     // cb -> callback
    let result = a + b
    cb(result)  // passed a callback, that is, we ran a function
}

// METHOD 1: callback using Regular Functions
add(2, 3, function(value) {
    console.log(value)
})

// METHOD 2: callback using Arrow Functions
add(2, 3, (value) => console.log(value))

// ========================================






// A function can return an another function
// Example:
function multiply(x, y, cb) {
    let result =  x * y
    cb(result)

    return () => console.log(result) // this returned function is neither assigned to any variable nor called. So nothing will be printed to the console, when simply calling multiply(10, 20, () => {}). However when that call is assigned to any variable, it will print the output.
}

multiply(10, 20, () => {})  // this will not log the result as stated the reson above!

let multiplyResult = multiply(10, 20, () => {})
multiplyResult()    // now this will log the result!
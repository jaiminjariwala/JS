function add(a, b) {
    return a + b
}

function square(val) {
    return val * val
}

// Now if we want to use above function sequentially
// i.e, a function that sequentially performs first addition and then square of the addition value!
// in this case, it's better to use composition

function composeTwoFunction(fn1, fn2) {
    return function (a, b) {
        return fn2(fn1(a, b))
    }
}

// above function in MODERN JS Format
const compose2functions = (fn1, fn2) => (a, b) => fn2(fn1(a, b))

const task = composeTwoFunction(add, square)
console.log(task(2,3))
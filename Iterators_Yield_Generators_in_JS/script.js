// Iterators

/* 
    "for...of" loop, works on ITERABLE OBJECTS like arrays, strings or maps.
    These OBJECTS have built-in ITERATOR FUNCTION that tells the loop, how to fetch each value one by one.

    Behind the scenes, the array [1,2,3,4,5] provides an iterator with a next() function, that retrieves the next value on every iteration. This make it possible to loop through the array sequentially!
*/
for (const val of [1, 2, 3, 4, 5]) {
    console.log(val)
}

// let's create an iterator function from scratch
function makeIterator(start=0, end=Infinity, step=1) {
    let nextStart = start   // Keeps track of the current value to return
    let iterationCount = 0  // Counts, how many iterations have occured

    return {    // returning an object with a next() method
        next() {
            /* 
                next method must return an object with 2 properties:
                1. value -> next value in the sequence
                2. done -> a boolean indicating whether the iteration is finished
            */
            let result;
            if(iterationCount < end) {
                result = { value: nextStart, done: false }  // done:false means... other entries are still pending
                nextStart = nextStart + step
                iterationCount++
                return result
            }
            return { value: iterationCount, done: true }
        }
    }
}

const myIterator = makeIterator(1, 10, 1)
let result = myIterator.next()

/* 
    The 1st call to next() retrieves {value:1, done:false} and result.value() is printed which is "1"
*/
while(!result.done) {
    console.log(result.value)
    result = myIterator.next()
}




// Generator Function and yield keyword in JS
function* count() {
    yield 2
    yield 4
    yield 6
    yield 8
}
const even = count()    // calling count() returns the generator object.
for (const val of even) {
    console.log(`Even Numbers are: ${val}`)
}


// to create our own iterator similar to one we created earlier...
function* makeMyNewIterator(start, end, stepSize=1) {
    for (let i=start; i<=end; i+=stepSize) {
        yield i
    }
}
let one = makeMyNewIterator(1, 30, 1)
// for (const val of one) {
//     console.log(val)
// }

const btn = document.getElementById("next-btn")
// accesing the next button
btn.addEventListener("click", () => {
    btn.innerText = one.next().value
})
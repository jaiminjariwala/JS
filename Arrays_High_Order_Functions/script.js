// Arrays
const students = ["Jaimin", "Ishan", "Darshil"]

console.log(students)
console.log(students[0])
console.log(students.push("Vandan"))
console.log(students)
console.log(students.reverse())

// Arrays... High Order Functions

// ============== Function 1: forEach ==============
// METHOD 1:
function print(name){
    console.log(name)
} // when this function will be invoked, it will log the value of 'name' to the console.

students.forEach(print)

// METHOD 2:
students.forEach((nameV2) => console.log(nameV2 + " Jariwala"))
// or 
students.forEach(nameV3 => console.log(nameV3))

// METHOD 3:
students.forEach(function(nameV4) {
    console.log(nameV4)
})
// Note: There's a difference between 'forEach' and 'map' function. 'forEach' does not return anything!
// For ex.

const numbers = [1, 2, 3, 4, 5]
function double(n) {
    return n * 2
}
let newArr = numbers.forEach(double)
console.log(newArr) // this will return undefined, as 'forEach' doesn't return anything, it doesn't create a new Array, WHEREAS, 'map' function do!

// ============== Function 2: .map ==============
let newArr2 = numbers.map(double)
console.log(newArr2)






// ========= Function 2: .find & .findIndex =========
let ans = numbers.find(num => num === 4)
console.log(ans)

let ans2 = numbers.findIndex(num => num === 4)
console.log(ans2)





// ============== Function 3: .filter ==============
const result = numbers.filter(num => num % 2 == 0) // if true then it will keep the 'value' in 'result' variable, else it will skip that value!
console.log(result)




// ============== Function 3: .slice ==============
// same as slicing in python, here there's just a method to achieve the same task!
console.log(numbers.slice(2, 5))
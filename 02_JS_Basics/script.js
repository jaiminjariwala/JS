// Variables

// DataType varName = value; 
// Languages where we externally have to provide DataType is called "Strongly Typed Languages". For ex, C, C++, Java

// Whereas Javascript is a loosely typed language where, dynamically DataType is assigned


// Naming Convention (which are valid) ;)
// firstname
// first_name
// FirstName (used for Classes)
// firstName (this is the most preferred way, called Camel Casing)

// var
var age = 22
console.log(age)

var num1 = 10
var num2 = 20

console.log(num1 + num2)

//==============================================================

// var scope is Global means...
// ex. 1
if(true) {
    var age = 23    // this age should be accessible inside if block, however one can even access it outside, because it's scope is global
    console.log(age)
}

console.log("The age is:", age)

// ex.2
console.log(height) // this will simply throw error, but if height is declared afterward using var dataType, then it will throw "undefined" output.

// Reason: we defined height later, so a space allocated in memory for height, but what exactly the value is, doesn't know!

var height = 176

// ===========================================================

// let (have Scope = local, and Typed = loosely)
let weight = 70
console.log(weight)

// ===========================================================

// const (have Scope = local, once value assigned cannot be changed)
const a = 2345
console.log(a)

// you anyhow have to give value while initiallizing const.
/*
    For ex. 
    let age;
    age = 23;   -> is valid

    but

    const age;
    age = 23;   -> invalid, it will throw error
*/

// ===========================================================




// Object DataType in JS
const person = {
    firstName: 'Jaimin',
    lastName: 'Jariwala',
    age: '22',
    isLoggedIn: false, // it's a better practice to keep ',' at last variable defined inside an object
}
console.log(person)
console.log(person.firstName)

// ===========================================================




// Ternary Operator: When we have exactly 2 conditions, either true or false; at that time this is used.

const umra = 22
let result = umra >= 18 ? 'Yes' : 'No'
console.log(result)




// ===========================================================

// Switch Case Statements
// Ex.1
const option = 3;

switch (option) {
    case 1: {
        console.log("Namaste!")
    }
    break;  // if we don't use break then, rest of the other cases will also executed!
    case 2: {
        console.log("Good Morning!")
    }
    break;
    case 3: console.log("Bonjour!") // even without braces, it works! and increases readability!
    break;
    default: console.log("Invalid Option!")
}

// Ex.2
let x = 100;
let opt = '+';
let y = 40;

switch (opt) {
    case '+': console.log(x+y)
    break
    case '-': console.log(x-y)
    break
    case '*': console.log(x*y)
    break
    default: console.log('IDK')
}

// ===========================================================



// Logical Operators
// AND (&&) -> All conditions must be true!
// OR ( || ) -> Atleast one condition should be true!
// NOT (!)
const myAge = 22
const myGender = 'male'

// Ex. of AND
if (myAge >= 18 && myGender == 'male') {
    console.log('You are Adult Male')
}

// Ex. of OR
if (myAge >= 18 || myGender == 'female') {
    console.log('Hey, You are an Adult Female!')
}

// Ex. of NOT
const number = 5
number % 2 != 0 ? console.log('Odd') : console.log('Even')

console.log('Jaimin')

// ===========================================================
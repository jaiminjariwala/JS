// Arrow Functions


// 1. Syntax
const sayHello = () => {
    console.log("Hello");
};

sayHello()








// 2. Parameters
// METHOD 1:
const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3))

// METHOD 2: One Liner Functions
// Use only when there's only one expression or line.
const multiply = (a, b) => a * b
console.log(multiply(5, 10))





// 3. 'arguments' keyword
// This 'argument' keyword is not available in Arrow Functions.
// Hence one can use REST Operator
const addNumbers = (...numbers) => {
    ans = 0
    for (let i=0; i<numbers.length; i++){
        ans = ans + numbers[i]
    }
    return ans
}

console.log("Output: " + addNumbers(2, 3, 4, 5))








// 4. Hoisting: It is a mechanism where variables and function declarations are moved to the top of their scope, before code execution.
// NOTE: Hoisting is only possible in NORMAL FUNCTION and NOT in ARROW FUNCTIONS.

sayHey()

function sayHey() {
    console.log("Hey!")
}








// 5. This Keyword
// METHOD 1: Inside the object, a function is assigned to a key 'myFunction'. This type of defining methods within an object is known as 'Method Shorthand' in JS.

// In regular functions, the 'this' keyword refers to the object, that calls the function. This means that the value of 'this' is determined by how function is called. If the function is method of an object, 'this' refers to method of that object.
const obj = {
    // key:value pair
    value: 20,

    // below is the method, that is being defined inside the object.
    myFunction: function() {    
        console.log("Value is: "+ this.value)
    }   
}

obj.myFunction();

// METHOD 2: Using 'this' keyword in arrow functions
const obj2 = {
    value: 30,
    myFunction: () => {
        console.log(this)   // refers to the outer scope (e.g., window in browsers)
    }
}

obj2.myFunction()

// MORE BETTER and CLEAN CODE EXPLANATION:
const obj3 = {
    value: 40,

    regularFunction: function() {
        console.log("Regular Function: " + this.value)  // this refers to obj3
    },

    arrowFunction: () => {
        console.log("Arrow Function: " + this.value)    // this refers to global object
    }
}

obj3.regularFunction()
obj3.arrowFunction()
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Using Modern JS Expression
const add = (a) => (b) => (c) => a + b + c;

// add function will only be executed when, it will receive rest of the functions arguments
// this is one example of currying!
console.log(add(10)(20)(30));



// ===============================================================



// Example-2:
function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(`Sending Email to ${to} with ${subject}: ${body}`);
    };
  };
}

let step1 = sendAutoEmail("oggy@gmail.com");
let step2 = step1("New Order Confirmation");
step2("Hey Oggy, Here is something for you!");

// Using Modern JS Function Expression!
const sendAutoEmail = (to) => (subject) => (body) =>
  `Sending Email to ${to} with ${subject}: ${body}`;

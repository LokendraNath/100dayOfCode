// -----------   1 ---------------
/*
     function stringToNumber(input) {
       if (!isNaN(input)) {
       return Number(input);
        } else {
            return "Not a number";
          }
        }

        function flipBoolean(input) {
          return !input;
        }

        function whatAmI(input) {
          if (typeof input == "number") {
            return "I'm a number!";
          } else if (typeof input == "string") {
            return "I'm a string!";
          } else {
            return "Im somthing else";
          }
        }

        function isItTruthy(input) {
          if (input) {
            return "It's truthy!";
          } else {
            return "It's falsey!";
          }
        }
        
        console.log(stringToNumber("3"));
        console.log(flipBoolean(3));
        console.log(whatAmI("lg"));
        console.log(isItTruthy("dk"));

*/

// -----------   2 ---------------
/*
    // **** DO NOT CHANGE the values *****
    const a = 18;
    const b = 24;

    // Addition of two values
    function add() {
      const result = a + b;
      return result;
    }

    // Subtract small value from larger one
    function subtract() {
      const result = b - a;
      return result;
    }

    function multiply() {
      const result = a * b;
      return result;
    }

    // Divide larger value by small
    function divide() {
      const result = b / a;
      return result;
    }

    // Increase value of a by 1
    function increment() {
      let result = a;
      result += 1;
      return result;
    }

    // Decrease value of b by 1
    function decrement() {
      let result = b;
      result -= 1;
      return result;
    }

    // Divide larger value by small to find the reminder
    function reminder() {
      const result = a % b;
      return result
    }
*/

// -----------   3 ---------------
/*
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number" && !isNaN(item));
}

function reverseArray(arr) {
  return arr.reverse();
}

function findMax(arr) {
  const result = Math.max(...arr);
  return result;
}

function removeDuplicates(arr) {
  const uniquesArray = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return uniquesArray;
}

function flattenArray(arr) {
  return arr.flat(Infinity);
}
*/
// -----------   4 ---------------
/*
function sumOfN(n) {
  return (n * (n + 1)) / 2;
  }
  
  function printMultiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(`${n} * ${i} = ${n * i}`);
      }
      return table;
      }
      
      function countVowels(str) {
        let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
      }
  }
  return count;
}
*/

// -----------   5 ---------------
const squareNumbers = (arr) => {
  let result = [];
  let squareNumber = arr.map((item) => item * item);
  result.push(squareNumber);
};

console.log(squareNumbers(10));

// const filterEvenNumbers = (arr) => ();

// const sumPositiveNumbers = (arr) => ();

// const getNames = (arr) => ();

// const findLongestWord = (arr) => ();

// -----------   6 ---------------
const person = {
  name: "hitesh",
  age: 19.5,
  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};

function outer() {
  function inner() {
    return `Inner function called`;
  }
  return inner();
}
outer();

//============ Map Challenge ==============//
// const arr = [2,3,19,5]

// const output = arr.map(num => num * 2)

//-------3--------//
const arr = ["apple", "banana", "cherry"];
const stringLength = arr.map((i) => i.length);

//-------4--------//

const uppercase = arr.map((i) => i.toUpperCase());
console.log(uppercase);

//-------5--------//
const users = [
  { name: "Aman", age: 22 },
  { name: "Sara", age: 25 },
  { name: "Raj", age: 30 },
];

const userNames = users.map((i) => i.name);

//-------6--------//
const scores = [45, 55, 60, 70];
const addTen = scores.map((i) => i + 10);

//-------7--------//
const flags = [true, false, true, false];
const string = flags.map((i) => `${i}`);

//-------8--------//
const prices = [100, 200, 300];
const gst = prices.map((i) => i + ((i * 18) / 100).toFixed(2));
console.log(gst);

//-------9--------//
const people = [
  { first: "Rahul", last: "Sharma" },
  { first: "Priya", last: "Verma" },
  { first: "Anil", last: "Yadav" },
];
const fullName = people.map((i) => `${i.first} ${i.last}`);
console.log(fullName);

//-------10--------//
const numbers = [1, 2, 3, 4, 5, 6];
const evenOdd = numbers.map((i) => (i % 2 === 0 ? "even" : "odd"));
console.log(evenOdd);

//---------------//
const userss = [
  { firstName: "Hitesh", lastName: "Sharma", age: 22 },
  { firstName: "Neha", lastName: "Verma", age: 19 },
  { firstName: "Aman", lastName: "Kumar", age: 25 },
  { firstName: "Priya", lastName: "Yadav", age: 21 },
  { firstName: "Rahul", lastName: "Singh", age: 23 },
];
const fullNamee = userss.map((i) => i.firstName + i.lastName);
console.log(fullNamee);

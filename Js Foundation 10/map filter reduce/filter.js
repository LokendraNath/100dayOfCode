const arr = [2, 4, 3, 4, 6, 7, 8, 5];

const odd = arr.filter((i) => i % 2);

const greatThan4 = arr.filter((i) => i > 2);
console.log(greatThan4);

//============== 3 ==============//
const words = ["apple", "bat", "car", "elephant", "dog"];
const greatThanThree = words.filter((i) => i.length > 3);

//============== 4 ==============//
const users = [
  { name: "Amit", age: 17 },
  { name: "Priya", age: 21 },
  { name: "Ravi", age: 16 },
  { name: "Neha", age: 19 },
];
const adults = users.filter((i) => i.age > 18);

//============== 5 ==============//
const products = [
  { name: "Pen", inStock: true },
  { name: "Pencil", inStock: false },
  { name: "Notebook", inStock: true },
];
const availbleStock = products.filter((i) => i.inStock === true);

//============== 6 ==============//
const students = [
  { name: "Raju", marks: 45 },
  { name: "Seema", marks: 82 },
  { name: "Tina", marks: 73 },
  { name: "Manoj", marks: 65 },
];
const passStu = students.filter((i) => i.marks >= 70);
console.log(passStu);

//============== 7 ==============//
const userss = [
  { firstName: "Hitesh", lastName: "Sharma", age: 22 },
  { firstName: "Neha", lastName: "Verma", age: 19 },
  { firstName: "Aman", lastName: "Kumar", age: 25 },
  { firstName: "Priya", lastName: "Yadav", age: 21 },
  { firstName: "Rahul", lastName: "Singh", age: 23 },
];
const ager = userss
.filter(i => i.age < 20)
.map(i => i.firstName);
console.log(ager);


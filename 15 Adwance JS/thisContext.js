const parent = {
  name: "lokendra",
  greet() {
    console.log(`${this.name} is become succesfull person next 5 year`);
  },
};

parent.greet();
const greet = parent.greet;
greet();

//============ BIND ===========//
const bindContext = parent.greet.bind({ name: "Lokendr Nath" });
bindContext();

// + //
const user = {
  name: "lokendra",
};
function greet2() {
  console.log(`Hello ${this.name}`);
}
const newGreet = greet2.bind(user);
newGreet();

//============ CALL ===========//
function user2(age) {
  console.log(this.name, age);
}
const name = {
  name: "Lokendra",
};
user2.call(name, 25);

//============ APPLY ===========//
function user3(age, city) {
  console.log(this.name, age, city);
}
const name2 = {
  name: "Lokendra",
};
user3.apply(name2, [25, "Durg"]);


//================ Exercise
// Task 1
const person = {
  name: "Alice",
  introduce() {
    return `Hi, my name is ${this.name}`;
  },
};

const boundIntroduce = person.introduce.bind(person);

// Task 2
function introduce() {
  return `Hi, my name is ${this.name}`;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

introduce.call(person1);
introduce.call(person2);

// Task 3
function sum(a, b) {
  return (a + b) * this.multipliyer;
}
const num1 = {multipliyer: 2}
const num2 = {multipliyer: 3}

console.log(sum.apply(num1, [8,6]))

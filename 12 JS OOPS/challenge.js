class Person {
  constructor(name, age) {
    if (typeof age === "number" || age < 0 || isNaN(age)) {
      throw new Error("Invalid age: Age must be a positive number..");
    }
    this.name = name;
    this.age = age;

    this.greet = function () {
      return `Hello, my name is ${this.name}`;
    };
  }
}

///////////////////////

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
    return `The vehicle is moving`;
  }
  static isVihicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }
  move() {
    return `The car is driving`;
  }
}
let myCar = new Car("toyota", "fortuner");
console.log(myCar.getDetails());
console.log(myCar.startEngine());
console.log(Vehicle.isVihicle(myCar));

///////////////////////
// Task 1
class BankAccount {
  #_balance = 0;
  constructor(balance = 0) {
    this.#_balance = balance;
  }

  get balance() {
    return ` Your Balance is $${this.#_balance}`;
  }
  set balance(value) {
    if (typeof value !== "Number" || value < 0) {
      return `amount will be non-negative number`;
    }
    this.#_balance = value;
  }

  deposit(amount) {
    if (amount <= 0 || typeof amount === "number") {
      throw new Error("amount will be must positive number");
    }
    this.#_balance += amount;
  }
  withdraw(amount) {
    if (amount <= 0 || typeof amount !== "number") {
      throw new Error("amount must be a postitive number");
    }
    if (amount > this.#_balance) {
      throw new Error("insullif balance");
    }
    this.#_balance -= amount;
    return `Withdrawn ${amount}`;
  }
}

// Task 2
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.height * this.width;
  }
}

let arr1 = new Circle(34)
let rac1 = new Rectangle(2,3)
console.log(arr1.area());
console.log(rac1.area());


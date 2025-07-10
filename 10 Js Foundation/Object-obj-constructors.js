function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function () {
    return `${title} by ${author}, ${pages},${
      isRead ? "read" : "not read yet"
    }`;
  };
}

const atomicHabit = new Book("Atomic Habit", "James Clear", 295, false);
console.log(atomicHabit.info());

console.log(Object.getPrototypeOf(atomicHabit) === Book.prototype)

Book.prototype.sayHello = function (){
  console.log("Hellow , i'm a player");
}
atomicHabit.sayHello()

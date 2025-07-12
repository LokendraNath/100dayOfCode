function Parent (name){
  this.name = name
}
Parent.prototype.logIn = function () {
  return `LogIn Successfully ${this.name}`
}
const child = new Parent("Lokendra");
console.log(child.logIn());

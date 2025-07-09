// let android = {
//   ui : 'android 14'
// }
// let tsmc = {
//   chip: 'snap dragon'
// }
// let nothing = {
//   design: "transparent",
//   __proto__: android,
//   // __proto__: tsmc
// }
// let lava = {}

// console.log("Nothing" , nothing.__proto__);

/////////////////////////

let nvidia = {
  cpu : "14 core"
}
let hp = {
  display: "15.4cm"
}
Object.setPrototypeOf(hp,nvidia);
console.log("hp", Object.getPrototypeOf(hp));



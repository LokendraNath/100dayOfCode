//===================== FOR =====================//

// 🔹 Stop at specific element and store previous ones
let teas = ["green tea", "black tea", "chai", "oolang tea"];
let selectedTeas = [];

for (let t = 0; t < teas.length; t++) {
  if (teas[t] === "chai") break;
  selectedTeas.push(teas[t]);
}

// 🔹 Skip specific element and multiply others
let arr1 = [2, 4, 7, 5, 6];
let doubleNumbers = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === 7) continue;
  doubleNumbers.push(arr1[i] * 2);
}

// 🔹 Skip specific city and store others
let allCities = ["london", "new York", "Paris", "berlin"];
let visitedCities = [];

for (let c = 0; c < allCities.length; c++) {
  if (allCities[c] === "Paris") continue;
  visitedCities.push(allCities[c]);
}

//===================== FOR...OF =====================//

// 🔹 Stop before specific element
let arr = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const element of arr) {
  if (element === 4) break;
  smallNumbers.push(element);
}

// 🔹 Skip specific tea
let allChais = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const chai of allChais) {
  if (chai === "herbal tea") continue;
  preferredTeas.push(chai);
}

// 🔹 Skip if length > 10
let cricketers = ["kohli", "dhoni", "Pujara", "wasidngtonn", "brar"];
let shortNames = [];

for (const cricketer of cricketers) {
  if (cricketer.length > 10) continue;
  shortNames.push(cricketer);
}

//===================== FOR...IN =====================//

// 🔹 Stop before specific key and store previous
let citiesPopulations = {
  London: 2304004,
  NewYork: 345600,
  Paris: 23400,
  Berlin: 345500,
};

let cityNewPopulation = {};

for (const city in citiesPopulations) {
  if (city === "Berlin") break;
  cityNewPopulation[city] = citiesPopulations[city];
}

// 🔹 Skip if value < 30
let populations = {
  London: 40,
  NewYork: 60,
  Paris: 80,
  Berlin: 10,
};

let largeCities = {};

for (const city in populations) {
  if (populations[city] < 30) continue;
  largeCities[city] = populations[city];
}

//===================== FOR...EACH =====================//

// 🔹 Skip specific player using return
let bestFootballers = ["messi", "ishowspeed", "ronaldo", "neymar", "mbappe"];
let restOfFootBallers = [];

bestFootballers.forEach((player, i) => {
  if (player === "mbappe") return;
  restOfFootBallers.push(player + ":" + i);
});

// 🔹 Skip specific player again
let theBeastsFootballer = [];

bestFootballers.forEach((ele) => {
  if (ele === "ishowspeed") return;
  theBeastsFootballer.push(ele);
});
console.log(theBeastsFootballer);

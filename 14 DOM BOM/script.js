
const h1 = document.querySelector(".heading");
h1.innerHTML = "lokendra";

const changeTextBtn = document.querySelector(".changeTextBtn");
const p = document.querySelector(".para");

changeTextBtn.addEventListener("click", function () {
  changeTextBtn.innerHTML = "This";
});

p.addEventListener("click", () => {
  p.innerHTML = "lorem 15";
});


// <!-- Eg3 : Create A inserting Element -->
document.querySelector(".addCity").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Raipur";
  let lists = document.querySelector("#inserting-list");
  lists.appendChild(newItem);
});


// <!-- Eg4 : remove Elements -->
document.querySelector(".removeLastLi").addEventListener("click", function () {
  let lists = document.getElementById("list");
  lists.lastElementChild.remove();
});


// <!-- Eg6 : Mouse Over Event Listener -->
document.querySelector(".newBtn6").addEventListener("mouseover", function () {
  alert("Hey !! Lokendra");
});

/// <!-- Eg7 : Event Deligations -->

document.querySelector("#footballerList").addEventListener("click", (e) => {
  if (e.target && e.target.matches(".players")) {
    alert(`Your Favorout Player is : ${e.target.textContent}`);
  }
});

// <!-- Eg8 : Form Handling -->

let form = document.querySelector("#feedbackForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userInput = document.querySelector("#feedbackInput").value;

  document.querySelector(
    "#feedbackDisplay"
  ).textContent = `Your Feedback Is ${userInput}`;
});

// <!-- Eg 9: DOM Content Loding -->
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#dom_status").textContent = "Hii Lokendraa";
});

// <!-- Example 10: CSS Classes Manipulation -->
document.querySelector("#toggleHighlight").addEventListener("click", () => {
  let desText = document.querySelector("#descriptionText");
  desText.classList.toggle("highLight");
});
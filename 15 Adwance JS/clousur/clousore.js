const outer = () => {
  let number = 4;

  return () => {
    number++;
    return number;
  };
};

const myNum = outer();
// console.log(myNum());
// console.log(myNum());

////////////////////////
function multier(num) {
  function multi(userGiven) {
    console.log(userGiven * num);
  }
  return multi;
}
let multi5 = multier(5);
multi5(7);

///========== Change Font Size ==========//
const name = document.getElementById("name");
const btn = document.getElementById("btn");

function makeSizer(size) {
  function changSize() {
    name.style.fontSize = `${size}px`;
  }
  return changSize;
}
let size20 = makeSizer(20);
let size100 = makeSizer(100);
let size70 = makeSizer(70);

btn.addEventListener("click", size100);

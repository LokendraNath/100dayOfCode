///============ 4 ============= ///

// const makeTea = (typeOfTea) => `makeTea: ${typeOfTea}`;

// const processTeaOrder = (teaFunc) => teaFunc("earl grey");

// let order = processTeaOrder(makeTea);
// console.log(order);

///============ 5 ============= ///

const createTeaMaker = () => {
  return (teaType) => {
    return `Making ${teaType}`;
  };
};

let teaMaker = createTeaMaker();
let result = teaMaker("green tea");

console.log(result);

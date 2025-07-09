const arr = [2, 3, 2, 4, 56];
const sumOfAll1 = arr.reduce((sum, cur) => (sum += cur));

//=========== Maximum ===========//
const sumOfAll2 = arr.reduce((max, cur) => {
  if (cur > max) {
    max = cur;
  }
  return max;
}, 0);
console.log(sumOfAll2);

//=========== User  ===========//
const userss = [
  { firstName: "Hitesh", lastName: "Sharma", age: 22 },
  { firstName: "Neha", lastName: "Verma", age: 19 },
  { firstName: "Aman", lastName: "Kumar", age: 22 },
  { firstName: "Priya", lastName: "Yadav", age: 21 },
  { firstName: "Rahul", lastName: "Singh", age: 22 },
];
const totalAge = userss.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
},{});
console.log(totalAge);


const youngsName = userss.reduce((acc,cur) =>{
  if(cur.age < 20){
    acc.push(cur.firstName)
  }
  return acc
},[]);

console.log(youngsName);



class SarkariForm {
  constructor(name, vacancy, startDate, lastDate) {
    this.name = name;
    this.vacancys = vacancy;
    this.startDate = startDate;
    this.lastDate = lastDate;
  }
  describe = () => {
    return `${this.name} Job is out The Total vacancy is ${this.vacancys} , form fill opne in ${this.startDate} to ${this.lastDate}`;
  };
}
let newVacancy1 = new SarkariForm("CHSL", 3456, "23-05-2025", "30-06-2025");
let newVacancy2 = new SarkariForm("CGL", 6756, "23-05-2025", "30-06-2025");
console.log(newVacancy1.describe());
console.log(newVacancy2.describe());

/////////////////////////

function Animal(name) {
  if( !new.target){
    throw new Error("Please Write new");
  }
  this.name = name;
} 

Animal.prototype.sound = function () {
  return `${this.name} sound is meow`;
};
const cat = new Animal("Cheetah");
const cat2 = Animal("Cheetah");
console.log(cat.sound());

/////////////////////////


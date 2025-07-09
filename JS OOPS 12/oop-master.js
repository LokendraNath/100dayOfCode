Array.prototype.speak = function () {
  return `kaw kaw ${this}`;
};
const myArray = [1, 2, 4, 3, 5];

////////////////
class GoogleUI {
  constructor(version, lauchDate) {
    this.version = version;
    this.lauchDate = lauchDate;
  }

  sammary() {
    return `New Updates: ${this.version} is launch on ${this.lauchDate}`;
  }
}
class Nothing extends GoogleUI {
  update() {
    return `Nothing New Update ${this.version} is Here !!!`;
  }
}
const myPhone = new Nothing("2.0", "22-06-2025");
// console.log(myPhone.sammary());
// console.log(myPhone.update());

const myPhoneSystem = new GoogleUI("3.0", "23-03-2025");
// console.log(myPhoneSystem.version);

//////////////////////////
//===================== ENCAPSULATION 🔐 =====================
class X {
  #emailAddress = "elone-musk@x.com";

  getEmail() {
    return this.#emailAddress;
  }
  setEmail(email) {
    if (typeof email === "string" && email.includes("@")) {
      this.#emailAddress = email;
    } else {
      throw new Error("Please Enter Valid Email");
    }
  }
}
const myAccount = new X();
console.log(myAccount.getEmail());
myAccount.setEmail("lokendraverma@gmail.com");
console.log(myAccount.getEmail());


//===================== ABSTRACTION =====================

class TeslaMap {
  #ai(){
    return `tesla ai is load data`
  }
  mapOpen(){
    if(this.#ai()){
      return 'Your Map is open (only image formate)';
    } else {
      return 'check your connection or server is down'
    }
  }
}
let myScreen = new TeslaMap();
console.log(myScreen.mapOpen());

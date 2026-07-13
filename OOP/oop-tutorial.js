class Dog {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  bark() {
    console.log(
      `name of Dog is ${this.name} and Color of Dog is ${this.color}`,
    );
  }
}

let d1 = new Dog("Tommy", "gloden");
let d2 = new Dog("Jack", "black");

d1.bark();
d2.bark();

class House {
  constructor(room, size) {
    this.room = room;
    this.size = size;
  }

  checkRoom() {
    if (this.room === "bedroom" || this.size === "100 sqft.") {
      console.log(`thi is ${this.room}  and  size  ${this.size} is  prefect`);
    } else {
      console.log(
        `this is not bedroom size  ${this.size} and also size is  not accurate`,
      );
    }
  }
}

let room1 = new House("bed", "100 sqft.");

room1.checkRoom();

class Car {
  constructor(carName = "toyata", model = 2008, brand = "japanese") {
    this.carName = carName;
    this.model = model;
    this.brand = brand;
  }

  carDetails() {
    console.log(
      `the carname is ${this.carName} and model is ${this.model} and brand is ${this.brand}`,
    );
  }
}

class $7_sitter extends Car {}

let car5 = new $7_sitter("omni", "1996", "suzuki");

car5.carDetails();

let car1 = new Car();
let car2 = new Car("BMW", "2022", "germany");
let car3 = new Car("mahindra", "2006", "india");
let car4 = new Car("TATA", "2006");

car1.carDetails();
car2.carDetails();
car3.carDetails();
car4.carDetails();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`my name is ${this.name} and I am ${this.age} years old`);
  }
}

class Student extends Person {}

let p1 = new Person("Navneet", 22);
let s1 = new Student("Riya", 19);
p1.introduce();
s1.introduce();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);

    this.course = course;
  }
}

let s1 = new Student("Navneet", 22, "Computer Science");

console.log(s1);

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating humnumumnum.`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} says Meow!`);
  }
}

class Bird extends Animal {
  eat() {
    console.log(`${this.name} pecks at the seeds gently.`);
  }
}

const myBird = new Bird("Pip");
myBird.eat();

const myCat = new Cat("Whiskers");
myCat.eat();

myCat.meow();

class Car {
  #speed = 0;

  accelerate() {
    this.#speed += 20;
    console.log(`Speed: ${this.#speed} km/h`);
  }

  brake() {
    this.#speed -= 10;
    console.log(`Speed: ${this.#speed} km/h`);
  }

  getSpeed() {
    return this.#speed;
  }
}

const bmw = new Car();

bmw.accelerate();
bmw.accelerate();
bmw.brake();

console.log(bmw.getSpeed());
class BankBalance {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  setBalance(amount) {
    this.#balance = amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankBalance(1000);

console.log(account.getBalance()); // 1000

account.setBalance(2500);

console.log(account.getBalance()); // 2500

class Car {
  start() {
    this.#checkEngine();
    this.#injectFuel();
    console.log("Car Started 🚗");
  }

  #checkEngine() {
    console.log("Checking engine...");
  }

  #injectFuel() {
    console.log("Injecting fuel...");
  }
}

const bmw = new Car();

bmw.start();

class ATM {
  withdraw(amount) {
    this.#verifyPin();
    this.#checkBalance();
    console.log(`₹${amount} Withdrawn`);
  }

  #verifyPin() {
    console.log("PIN Verified");
  }

  #checkBalance() {
    console.log("Balance Checked");
  }
}

const atm = new ATM();

atm.withdraw(500);

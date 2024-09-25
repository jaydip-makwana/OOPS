/**
 * Inheritance => Inheritance allows a class to inherit properties and methods from another class.
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} can make a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} can barks`);
  }
}

let d = new Dog("Tommy");

d.speak();

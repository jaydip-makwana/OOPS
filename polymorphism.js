/**
 * Polymorphism => Allows objects of different types to be treated as instances of the same base type
 */

class Animal {
  canWalk() {
    console.log(`This is a generic animal walk.`);
  }
}

class Dog extends Animal {
  canWalk() {
    console.log(`Dog can walk.`);
  }
}

class Cat extends Animal {
  canWalk() {
    console.log("Cat can walk.");
  }
}

// Polymorphism in action
const myAnimal = new Animal();
const myDog = new Dog();
const myCat = new Cat();

myAnimal.makeSound(); // Output: This is a generic animal walk.
myDog.makeSound(); // Output: `Dog can walk.
myCat.makeSound(); // Output: Cat can walk.

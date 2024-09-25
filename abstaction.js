/**
 * Abstraction => Hiding the implementation details and Show Only necessary details
 */

class Engine {
  start() {
    console.log("Engine is started...");
  }

  stop() {
    console.log("Engine is stopped...");
  }
}

class Car {
  constructor(car, model, year) {
    this.car = car;
    this.model = model;
    this.year = year;

    this.engine = new Engine(); // Abstract representation of the engine
  }

  start() {
    console.log("Starting the engine...");
    this.engine.start();
  }

  stop() {
    console.log("Stopping the engine...");
    this.engine.stop();
  }
}

const car = new Car("Toyota", "Camry", 2023);

car.start();
// car.stop();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => console.log("Name is ", this.name);

  getAge() {
    console.log("Age is ", this.age);
  }
}

const person = new Person("Jaydip", 24);

person.getAge();

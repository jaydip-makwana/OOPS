/**
 * Encapsulation => where an object’s internal state (data) is kept hidden from the outside world
 * & only accessible through well-defined methods.
 */

class MyAccount {
  #balance; // private variable

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance = this.#balance + amount;
    return this.#balance;
  }

  withdraw(amount) {
    this.#balance = this.#balance - amount;
    return this.#balance;
  }
}

const myAccount = new MyAccount(1000);
myAccount.deposit(1000);
myAccount.withdraw(500);

// Trying to access the private balance directly will fail
console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

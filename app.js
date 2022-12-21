// Object oriented (Class)
// Define Person class
class Person {
  // Create person's constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
const person1 = new Person("Navid", "Hejazi");
console.log(person1);
console.log(person1.firstName);
console.log(person1.greeting());

//  Define a sub class under the name of Customer
class Costumer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // Inherit properties via super
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
  advertising() {
    return `Dear ${this.firstName}, we have a grate discount on the weekend. 
        Please check our website`;
  }

  /* Static methods only can be called via the name of
    class, no via object */
  static getMembershipCost() {
    return 500;
  }
}

const customer1 = new Costumer("John", "Doe", "555-888-666", "standard");

console.log(customer1);
console.log(customer1.advertising());
console.log(customer1.greeting());

console.log(Costumer.getMembershipCost());
// it is not correct --> console.log(customer1.getMembershipCost());

class Person {
  constructor(name, luggage) {
    this.name = name;
    this.luggage = luggage;
  }

  addBag(bag) {
    this.luggage.push(bag);
  }
}
class Passenger extends Person {
  callAttendant() {
    console.log("Excuses me, Hay there!");
  }
}

class Crew extends Person {
  callGreeting() {
    console.log("Welcome aboard!");
  }
}

module.exports = { Person, Passenger, Crew };

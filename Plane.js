const { Person, Passenger, Crew } = require("./Passenger");

class Plane {
  constructor(name) {
    this.name = name;
    this.passengers = [];
    this.crew = [];
  }
  boardPerson(person) {
    if (person instanceof Crew) {
      this.crew.push(person);
    } else if (person instanceof Passenger) {
      this.passengers.push(person);
    } else {
      console.log("Error");
    }
  }
}

module.exports = Plane;

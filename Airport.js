const Plane = require('./plane');
const airportData = require('./airportsData.json');
const fs = require('fs/promises');
const { resolve } = require('path');

class Airport {
  static airports = [];

  constructor(name, icao) {
    this.name = name;
    this.planes = [];
    this.constructor.airports.push(this);
    this.icao = icao;
  }
  land(plane) {
    this.planes.push(plane);
  }
  //callback function
  getInfo(callback) {
    fs.readFile('./airportsData.json', (err, data) => {
      const allAirport = JSON.parse(String(data));
      const airportA = allAirport.find(
        (airports) => airports.icao === this.icao
      );
      callback(err, airportA);
    });
  }
  //promise based function
  getInfoAirports() {
    return new Promise((resolve, reject) => {
      fs.readFile('./airportsData.json', (err, data) => {
        if (err) return reject(err);
        const allAirport = JSON.parse(String(data));
        const airportB = allAirport.find(
          (airports) => airports.icao === this.icao
        );
        resolve(airportB);
      });
    });
    //async wait function
    async function differentAirportInfo() {
      let response = await fs.readFile('./airportsData.json');
      // airStation = another word for airports
      let allAirStations = await response.json();
      const airportC = allAirport.find(
        (airports) => airports.icao === this.icao
      );
      await new Promise((resolve, reject) => setTimeout(resolve, 0));

      return airportC;
    }
  }
}
module.exports = { Airport };

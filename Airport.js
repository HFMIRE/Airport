const Plane = require('./plane');
const fs = require('fs')
const airportData = require('./airportsData.json')



class Airport {
  static airports = [] 

  constructor( name, icao ) {
    this.name = name
    this.planes = []
    this.constructor.airports.push(this)
    this.icao = icao
    
    
  }
  land(plane) {
    this.planes.push(plane)
  } 
  getInfo(callback) {
    fs.readFile('./airportsData.json', (err, data) => {

      const allAirport = JSON.parse(String(data));
      const airport = allAirport.find(x => x.icao === this.icao);
      callback(err, airport);
   
    })
  } 
}

module.exports = {Airport}
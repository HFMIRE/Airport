
const {Person, Passenger, Crew} = require('./Passenger'); 
const Plane = require('./plane');


describe('Planes test', () => {
    test('checking if planes classes work', () => {
      // arrange
      let ba = new Plane('British Airways'); 
      let dora = new Passenger('Dora the Explorer', 43); 
  
      // Act
      ba.boardPerson(dora);
  
      // Assert
     let passengerIndex =  ba.passengers.findIndex((element) => element.name === dora.name);
      expect(ba.name).toEqual('British Airways'); 
     
      expect(passengerIndex).toBeGreaterThanOrEqual(0); 
    })
  
  })
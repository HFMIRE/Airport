const Airport = require('./Airport');
const Passenger = require('./Passenger'); 
const Plane = require('./plane');
const Bag = require('./Bag'); 
const { airports } = require('./Airport');


describe('airport test', () => {
    test('checking if the Airport classes works', () => {
      let heathrow = new Airport('LHR');
      expect(heathrow.name).toEqual('LHR');
    });
  })


describe('static classes - airports', () => {
    test('checking if static class', () => {
     let LosAngles = new Airport('LAX'); 
      
     

    //   const removingPlanes = airports.filter(airports => airports.length <= 3 )


    // const removingPlanes = airports.filter(airports => airports.length <= 3 )

    
      
    } )
  })
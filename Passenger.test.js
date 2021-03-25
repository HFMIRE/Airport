
const {Person, Passenger, Crew} = require('./Passenger'); 


describe('Passenger test', () => {
    test.skip ('checking if the passenger classes work', () => {
      let dora = new Passenger('Dora the Explorer', 43); 
      expect(dora.name).toEqual('Dora the Explorer'); 
      expect(dora.luggage).toEqual(43); 
  
    })
  })

describe('extending the Paassenger', () => {
  test.skip('is an instance of a Passenger', () => {
    const betty = new Passenger('Betty', 54)
    
    console.log(betty);

    expect(betty instanceof Passenger).toBeTruthy()
})
} )

describe('extending the crew', () => {
  test.skip('is an istance of a Crew', () => {
    const bob = new Crew ('Bob the Builder', 62 )
  
    console.log(bob);

    expect(bob instanceof Crew ).toBeTruthy()
  })
} )
 
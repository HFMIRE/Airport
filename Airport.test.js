const  {Airport} = require('./Airport');




describe('airport test', () => {
    test.skip('checking if the Airport classes works', () => {
      let heathrow = new Airport('LHR');
      expect(heathrow.name).toEqual('LHR');
    });
  })


describe('static classes - airports', () => {
    test.skip('checking if static class', () => {
     let LosAngles = new Airport('LAX');
    //   const removingPlanes = airports.filter(airports => airports.length <= 3 )
    // const removingPlanes = airports.filter(airports => airports.length <= 3 )
    } )
  })



describe('callback - airport', () => { 
    test('airports have a city', (done) => {
      // Test 
      const LHR = new Airport('LHR', 'EGLL')
      // Act
      LHR.getInfo((err, info) => {

      console.log(info)

      //Assert 
      expect(err).toBeNull()
      expect(info.country).toEqual('GB')
      done()
  })
})
})


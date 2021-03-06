const { Person, Passenger, Crew } = require('./Passenger');
const Bag = require('./Bag');

describe('bag test', () => {
  test.skip('checking if bag test', () => {
    // Arrange
    let dora = new Passenger('Dora the Explorer', 43);

    //Act
    function luggageItem({ luggage }) {
      return luggage;
    }
    let luggage = Bag;

    //Assert
    expect(dora.luggage).toEqual(43);
    expect(luggage).toBe(Bag);
    console.log(dora);
  });
});

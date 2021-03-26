const { Airport } = require('./Airport');

describe('airport test', () => {
  test.skip('checking if the Airport classes works', () => {
    let heathrow = new Airport('LHR');
    expect(heathrow.name).toEqual('LHR');
  });
});

describe('static classes - airports', () => {
  test.skip('checking if static class', () => {
    let LosAngles = new Airport('LAX');
    //   const removingPlanes = airports.filter(airports => airports.length <= 3 )
    // const removingPlanes = airports.filter(airports => airports.length <= 3 )
  });
});

describe('getInfo - callback', () => {
  test.skip('airport information - callback', () => {
    // Arrange
    const LHR = new Airport('LHR', 'EGLL');
    // Act
    LHR.getInfo((err, info) => {
      //console.log(info)
      //Assert
      expect(err).toBeNull();
      expect(info.country).toEqual('GB');
      done();
    });
  });
});
describe('getInfo - callback', () => {
  test.skip('airport info - promises', () => {
    // Arrange
    const LAX = new Airport('LAX', 'KLAX');
    // Act
    return LAX.getInfoAirports();
    LAX.then(function (data) {
      //Assert
      expect(data.country).toEqual('USA');
    }).catch(function (err) {
      expect(err).toBeNull();
      console.log('There is a error.');
    });
  });
  test('airportInfomation - async await', () => {
    // Arrange
    const LAX = new Airport('LAX', 'KLAX');

    // Act
    const airportC = LAX.differentAirportInfo();
    expect(airportC.country).toEqual('USA');
    // }).catch((err) => {
    //   expect(err).toBeNull();
    //   console.log('There is a error.');
  });
});

const { faker } = require('@faker-js/faker');

function randomRoute() {
  return {
    id: faker.number.int(),
    from: faker.location.street(),
    to: faker.location.street(),
    fromLatitude: faker.location.latitude(),
    fromLongitude: faker.location.longitude(),
    toLatitude: faker.location.latitude(),
    toLongitude: faker.location.longitude(),
  };
}


function getRoutes({latitude, longitude }, limit = 10) {
  return faker.helpers.multiple(randomRoute, {
    count: limit,
  });
}

module.exports = {
  getRoutes,
  randomRoute,
}
const { faker, fa } = require('@faker-js/faker');
let moment = require('moment');

const { randomRoute } = require('../route/route.service');

function randomTrip() {
  const dateSoon = faker.date.soon();
  return {
    id: faker.number.int(),
    start_date_time: dateSoon,
    day: moment(dateSoon).format('dddd'),
    hour: moment(dateSoon).format('h:mm:ss a'),
    vehicleId: faker.number.int(),
    vehicle: {
      name: faker.vehicle.vehicle(),
      type: faker.vehicle.type(),
      totalSeats: faker.number.int({min: 1, max:16}),
    },
    routeId: faker.number.int(),
    // route: randomRoute(),
  };
}


function getTrips(routeId, limit = 4) {
  return faker.helpers.multiple(randomTrip, {
    count: limit,
  });
}

module.exports = {
  getTrips,
}
const { faker } = require('@faker-js/faker');

function randomBooking() {
  const totalSeats = Array(16).fill().map((v,i)=>i+1);
  return {
    // user_id: faker.number.int(),
    // booked_seats: faker.number.int({min: 1, max: 16}),
    bookedSeats: faker.helpers.arrayElements(totalSeats, { min: 2, max: 8 }),
  };
}


function getBookingSeats(tripId) {
  return randomBooking()
}

module.exports = {
  getBookingSeats,
}
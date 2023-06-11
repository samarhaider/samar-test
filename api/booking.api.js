const express = require('express');
const api = express.Router();

const bookingController = require('../app/booking/booking.controller.js');

api.post('/bookings', bookingController.create);
api.get('/bookings/available-seats/:tripId', bookingController.availableSeats);

module.exports = api;

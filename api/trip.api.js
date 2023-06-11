const express = require('express');
const api = express.Router();

const tripController = require('../app/trip/trip.controller.js');

api.get('/trips/:routeId', tripController.all);

module.exports = api;

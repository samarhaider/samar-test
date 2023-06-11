const express = require('express');
const api = express.Router();

const routeController = require('../app/route/route.controller.js');
const { routeListValidator } = require('../app/route/route.validator.js');

api.get('/routes', routeListValidator(), routeController.all);

module.exports = api;

const express = require('express');
const api = express.Router();

const authController = require('../app/auth/auth.controller.js');

api.post('/', authController.signUp);

module.exports = api;

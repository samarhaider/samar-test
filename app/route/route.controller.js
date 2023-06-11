const { validationResult } = require('express-validator');
const { getRoutes } = require('./route.service');

exports.all = (req, res, next) => {
  try {
    validationResult(req).throw();
    const { latitude, longitude } = req.query;
    res.json(getRoutes({latitude, longitude}));
  } catch (e) {
    res.status(400).send({ errors: e.mapped() });
  }
}

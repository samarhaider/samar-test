const { query } = require('express-validator')

exports.routeListValidator = () => {
  return [
    query('latitude').exists().isFloat(),
    query('longitude').exists().isFloat(),
  ];
}
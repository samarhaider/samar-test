const { getTrips } = require('./trip.service');

exports.all = (req, res, next) => {
  const { routeId } = req.params;
  res.json(getTrips(routeId));
}

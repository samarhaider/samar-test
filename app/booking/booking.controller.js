const { getBookingSeats } = require('./booking.service');

exports.availableSeats = (req, res, next) => {
  const { tripId } = req.params;
  res.json(getBookingSeats(tripId));
}

exports.create = (req, res, next) => {
  const { tripId, seats } = req.body;
  // first we verify trip
  // second we check, are these seats available
  // third store user seat

  res.json({});
}

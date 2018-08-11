import models from '../../database/models/index';

export default(req, res, next) => {
  const {
    originValue, destinationValue, dateValue, airCraftTypeValue, flightDuration, flightNumberValue,
  } = req.body;
  models.Flights.create({
    flight_no: flightNumberValue,
    origin: originValue,
    destination: destinationValue,
    flight_date: dateValue,
    flight_duration: flightDuration,
    aircraft: airCraftTypeValue,
  }).then((result) => {
    if (result) {
      res.status(200).send({ succesfullyAdded: true });
    }
  }).catch((err) => { next(err); });
};

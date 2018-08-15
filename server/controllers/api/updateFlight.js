import models from '../../database/models/index';

export default (req, res, next) => {
  const flightNumber = req.params.flightId || req.body.flightNo;

  models.Flights.findOne({ where: { flight_no: flightNumber } }).then((result) => {
    const resultFlightInformation = result.dataValues;
    res.status(200).send({ data: resultFlightInformation });
  });
};

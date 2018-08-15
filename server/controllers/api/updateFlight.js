import models from '../../database/models/index';

export default (req, res, next) => {
  const flightNumber = req.params.flightId || req.body.flightNo;

  models.Flights.findOne({ where: { flight_no: flightNumber } }).then((result) => {
    let resultFlightInformation = {};
    resultFlightInformation = result.dataValues;
    console.log(resultFlightInformation);
    res.status(200).send({ data: resultFlightInformation });
  });
};

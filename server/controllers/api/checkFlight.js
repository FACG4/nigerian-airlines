import models from '../../database/models/index';

export default(req, res) => {
  const { textInputValueFlightNo } = req.body;
  models.Flights.findOne({ where: { flight_no: textInputValueFlightNo } }).then((result) => {
    if (result && result.dataValues) {
      res.send({ isAvailable: true, flight_no: result.dataValues.flight_no });
    } else {
      res.send({ isAvailable: false });
    }
  });
};

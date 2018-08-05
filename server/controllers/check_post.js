import models from '../database/models/index';

export default(req, res, next) => {
  const { no } = req.body;
  models.Flights.findOne({ where: { flight_no: no } }).then((result) => {
    if (result) {
      res.send({ isAvailable: true, sweetAlert: 'false' });
    }
    if (result === null) {
      res.send({ isAvailable: false });
    }
  });
};

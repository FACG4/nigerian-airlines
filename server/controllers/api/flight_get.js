import models from '../../database/models/index';

export default (req, res, next) => {
  models.Flights.findAll().then((result) => {
    const flights = [];
    result.map(flight => flights.push(flight));
    res.send(JSON.stringify({ data: flights }));
  }).catch((e) => {
    res.status(500).send({ msg: 'Internal server error', erorr: e });
  });
};

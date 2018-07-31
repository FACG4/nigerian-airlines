import models from '../database/models/index';

// exports.post = (req, res, next) => {
export default(req, res, next) => {
  const {
    originValue, destinationValue, dateValue, airCraftTypeValue,
  } = req.body;

  models.Flights.create({
    originValue, destinationValue, dateValue, airCraftTypeValue,
  }).then((result) => {

  });
};

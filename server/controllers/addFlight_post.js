import models from '../database/models/index';

export default(req, res, next) => {
  const {
    originValue, destinationValue, dateValue, airCraftTypeValue,
  } = req.body;

  models.Flights.create({
    originValue, destinationValue, dateValue, airCraftTypeValue,
  }).then((result) => {
    if (result) {
      res.send({ succesfullyAdded: true });
    }
  }).catch((err) => { next(err); });
};

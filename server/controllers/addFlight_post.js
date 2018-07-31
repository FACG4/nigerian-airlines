import models from './../database/models/index';

exports.post = (req, res, next) => {
  // console.log(req.body);
  const {originValue : origin ,destinationValue :destination ,dateValue:date, airCraftTypeValue: airCraftType } = req.body;

models.Flights.create({ origin: origin, destination: destination, aircraft:airCraftType ,flight_date :date}).then((result) => {

});

}
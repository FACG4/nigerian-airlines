import models from './../database/models/index';
exports.get = (req, res, next) => {
console.log(req.body);
res.send({name: noureldean})
// models.Flights.findAll().then((result) => {
//   console.log(result);
// });
};

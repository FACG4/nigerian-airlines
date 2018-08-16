import models from '../../database/models/index';
import sendSmsNotifications from './sendSms';

export default (req, res, next) => {
  const {
    gateNo,
    status,
    terminalNo,
    departureTime,
  } = req.body;
  const {
    flightId: flightNo,
  } = req.params;

  models.Flights
    .update({
      gate: gateNo,
      status,
      terminal_no: terminalNo,
      departure_time: departureTime,
    }, {
      where: {
        flight_no: flightNo,
      },
      returning: true,
      plain: true,
    })
    .then((result) => {
      if (result) {
        models.Customers.findAll({
          where: {
            flight_id: result[1].dataValues.id,
            notify_me: true,
          },
        }).then((customerResult) => {
          const {
            departure_time: departureTime1,
            terminal_no: terminalNo1,
            status: status1,
          } = result[1].dataValues;
          sendSmsNotifications(departureTime1, terminalNo1, status1);
          res.status(200).send({
            succesfullyEdited: true,
          });
        }).catch(e => next(e));
      }
    }).catch(e => next(e));
};

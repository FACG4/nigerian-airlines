import models from '../../database/models/index';

export default (req, res, next) => {
  const {
    textInputValuepPhone,
  } = req.body;

  models.Customers
    .update({
      notify_me: true,
    }, {
      where: {
        phone: textInputValuepPhone,
      },
      returning: true,
      plain: true,
    })
    .then((result) => {
      if (result) {
        res.send({ isAvailable: true });
        console.log('updated');
      } else {
        res.send({ isAvailable: false });
      }
    }).catch(e => next(e));
};

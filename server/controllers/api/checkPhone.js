import models from '../../database/models/index';

export default(req, res) => {
  const { textInputValuepPhone } = req.body;
  models.Customers.findOne({ where: { phone: textInputValuepPhone } }).then((result) => {
    if (result && result.dataValues) {
      res.send({ isAvailable: true });
    } else {
      res.send({ isAvailable: false });
    }
  });
};

import models from './../database/models/index';
import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

exports.post = (req, res, next) => {
  console.log(req.body);
  const { textInputValueUsername: username ,textInputValuePassword: password } = req.body;
  models.Admin.findOne({ where: { username } }).then(result => {
    if (result && result.dataValues) {
      bcrypt.compare(password, result.dataValues.password, (err, isTrue) => {
        if (err) {
          next(err);
        } else if (isTrue) {
          console.log('succcccccccssse loin');
          const secret = process.env.SECRET;
          const token = jwt.sign({
            id: result.dataValues.id,
            adminName: result.dataValues.username
          }, secret);
          res.cookie('AdminToken', token);
          res.send({ doneLogin: true,sweetAlert: 'false' });

        } else {
          res.send({ doneLogin: false });
          console.log('Invalied Password or Username');
        }
      });
    } else {
      res.send({ doneLogin: false });
      console.log('Invalied Password or Username');
    }

  });
};

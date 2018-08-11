import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../../database/models/index';

export default(req, res, next) => {
  const { username, password } = req.body;
  models.Admin.findOne({ where: { username } }).then((result) => {
    if (result && result.dataValues) {
      bcrypt.compare(password, result.dataValues.password, (err, isTrue) => {
        if (err) {
          res.stats(401).send({ isLoggedIn: false, error: 'Invalied Password or Username' });
        } else if (isTrue) {
          const secret = process.env.SECRET;
          const token = jwt.sign({
            id: result.dataValues.id,
            adminName: result.dataValues.username,
          }, secret);
          res.cookie('AdminToken', token);
          res.stats(200).send({ isLoggedIn: true, sweetAlert: 'false' });
        } else {
          res.status(401).send({ isLoggedIn: false, error: 'Invalied Password or Username' });
        }
      });
    } else {
      res.stats(401).send({ isLoggedIn: false, error: 'Invalied Password or Username' });
    }
  });
};

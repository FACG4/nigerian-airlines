import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../database/models/index';

export default(req, res, next) => {
  const { username, password } = req.body;
  models.Admin.findOne({ where: { username } }).then((result) => {
    if (result && result.dataValues) {
      bcrypt.compare(password, result.dataValues.password, (err, isTrue) => {
        if (err) {
          next(err);
        } else if (isTrue) {
          // we will keep this consoles for now during the development
          // until we handle all the error properly
          console.log('succese loin');
          const secret = process.env.SECRET;
          const token = jwt.sign({
            id: result.dataValues.id,
            adminName: result.dataValues.username,
          }, secret);
          res.cookie('AdminToken', token);
          res.send({ doneLogin: true, sweetAlert: 'false' });
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

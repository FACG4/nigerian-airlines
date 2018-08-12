import jwt from 'jsonwebtoken';
import env from 'env2';

env('./config.env');

export default (req, res, next) => {
  if (req.cookies.AdminToken === undefined) {
    res.status(401).send({ msg: 'User is authorized' });
  } else {
    jwt.verify(req.cookies.AdminToken, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        res.clearCookie('AdminToken');
        res.status(401).send({ msg: 'User is authorized' });
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};

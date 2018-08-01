import jwt from 'jsonwebtoken';
import env from 'env2';

env('./config.env');

export default(req, res, next) => {
  if (req.cookies.AdminToken === undefined) {
    console.log('not allowed');
  } else {
    jwt.verify(req.cookies.AdminToken, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        res.clearCookie('AdminToken');
        console.log('notttttt allooe');
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};

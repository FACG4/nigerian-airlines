import jwt from 'jsonwebtoken';
import env from 'env2';

env('./config.env');

export default(req, res, next) => {
  if (req.cookies.accessToken === undefined) {
    console.log('not allowed');
  } else {
    jwt.verify(req.cookies.accessToken, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        res.clearCookie('accessToken');
        console.log('notttttt allooe');
        // res.redirect('/');
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};

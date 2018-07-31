const jwt = require('jsonwebtoken');
require('env2')('./config.env');
console.log('fffffffffffffffffffffffff');

const verifyCookie = (req, res, next) => {
  if (req.cookies.accessToken === undefined) {
    console.log('notttttt allooe');
    
    // res.redirect('/');
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
}
module.exports = verifyCookie;
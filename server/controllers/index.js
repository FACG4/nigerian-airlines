const router = require('express').Router();
const login = require('./login_post.js');
const addFlight = require('./addFlight_post.js');
const verify = require('./verify');


router.post('/login_post', login.post);
router.post('/addFlight_post', verify,addFlight.post);

module.exports = router;
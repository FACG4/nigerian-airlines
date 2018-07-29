const router = require('express').Router();
const login = require('./login_post.js');
router.get('/login_post', login.post);
module.exports = router;

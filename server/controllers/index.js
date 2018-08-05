import express from 'express';
import login from './login_post';
import addFlight from './addFlight_post';
import checkFlight from './check_post';
// import verify from './verify';

const router = express.Router();

router.post('/login_post', login);
router.post('/addFlight_post', addFlight);
router.post('/check_post', checkFlight);

export default router;

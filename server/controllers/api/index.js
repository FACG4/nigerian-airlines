import express from 'express';
import login from './login_post';
import addFlight from './addFlight_post';
import flights from './flight_get';
import updateFlight from './updateFlight_post';
import editFlightInformation from './editFlightInformation_post';

const router = express.Router();

router.post('/login_post', login);
router.post('/addFlight_post', addFlight);
router.get('/flight_get', flights);
router.post('/updateflight_post', updateFlight);
router.post('/editFlightInformation_post', editFlightInformation);

export default router;

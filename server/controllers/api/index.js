import express from 'express';
import login from './login_post';
import addFlight from './addFlight_post';
import flights from './flight_get';
import updateFlight from './updateFlight_post';
import editFlightInformation from './editFlightInformation_post';

const router = express.Router();

router.post('/login', login);
router.post('/flight', addFlight);
router.get('/flights', flights);
router.get('/flight/:flightId', updateFlight);
router.post('/flight/:flightId', editFlightInformation);

export default router;

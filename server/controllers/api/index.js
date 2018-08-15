import express from 'express';
import login from './login';
import addFlight from './addFlight';
import flights from './flights';
import updateFlight from './updateFlight';
import editFlightInformation from './editFlight';
import getFlightfromFlightNo from './checkFlight';


const router = express.Router();

router.post('/login', login);
router.post('/flight', addFlight);
router.get('/flights', flights);
router.get('/flight/:flightId', updateFlight);
router.post('/flight/:flightId', editFlightInformation);

router.post('/check_flight', getFlightfromFlightNo);
router.post('/get_flight_details', updateFlight);


export default router;

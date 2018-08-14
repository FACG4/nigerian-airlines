import express from 'express';
import login from './login';
import addFlight from './addFlight';
import flights from './flights';
import updateFlight from './updateFlight';
import editFlightInformation from './editFlight';

const router = express.Router();

router.post('/login', login);
router.post('/flight', addFlight);
router.get('/flights', flights);
router.get('/flight/:flightId', updateFlight);
router.post('/flight/:flightId', editFlightInformation);

export default router;

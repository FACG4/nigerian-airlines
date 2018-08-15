import express from 'express';
import login from './login';
import addFlight from './addFlight';
import flights from './flights';
import updateFlight from './updateFlight';
import editFlightInformation from './editFlight';
import getFlightfromFlightNo from './checkFlight';
import checkPhone from './checkPhone';
import udateCustomer from './udateCustomer';


const router = express.Router();

router.post('/login', login);
router.post('/flight', addFlight);
router.get('/flights', flights);
router.get('/flight/:flightId', updateFlight);
router.post('/flight/:flightId', editFlightInformation);

router.post('/check_flight', getFlightfromFlightNo);
router.post('/get_flight_details', updateFlight);
router.post('/check_phone', checkPhone);
router.post('/update_customer', udateCustomer);


export default router;

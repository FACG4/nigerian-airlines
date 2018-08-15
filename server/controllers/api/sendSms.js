import env from 'env2';
import twilio from 'twilio';

env('./config.env');

export default (departureTime, terminalNo, status) => {
  const accountSid = process.env.ACCOUNRSID;
  const authToken = process.env.AUTHTOKEN;
  const client = twilio(accountSid, authToken);
  client.messages
    .create({
      body: `Latest Updates on your flight: Departure Time: ${departureTime}  , Terminal number : ${terminalNo} , Status : ${status} .. Please reviw our app`,
      from: '+12762183145',
      to: '+970567716309',
    })
    .then(message => console.log(message.sid))
    .done();
};

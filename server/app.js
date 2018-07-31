import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const cookieParser = require('cookie-parser');
const controllers = require('./controllers/index');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 4001);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
app.use(cookieParser());
app.use(controllers);
export default app;

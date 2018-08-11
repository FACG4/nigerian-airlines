import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import apiRouts from './controllers/api/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 4001);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(cookieParser());
app.use('/api/v1', apiRouts);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

export default app;

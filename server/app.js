import express from 'express';
import path from 'path';
const controllers = require('./controllers/index');

const app = express();

app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
app.use(controllers);
export default app;

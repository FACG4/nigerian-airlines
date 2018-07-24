import models from './database/models/index';
import app from './app';

const port = app.get('port');

models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Cool stuff is going on port ${port}`);
  });
}).catch((e) => {
  console.warn('error', e);
});

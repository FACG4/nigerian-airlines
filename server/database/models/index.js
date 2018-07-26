import models from '../config/db';

const { sequelize } = models;

models.Admin = sequelize.import('./admin');
models.Flights = sequelize.import('./flights');
models.Customers = sequelize.import('./customers');

// Relations;

models.Flights.hasMany(models.Customers, {
  onDelete: 'CASCADE',
  foreignKey: 'flight_id',
  targetKey: 'id',
});

export default models;

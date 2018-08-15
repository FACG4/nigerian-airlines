import models from '../config/db';

const { sequelize } = models;

models.Admin = sequelize.import('./admin');
models.Flights = sequelize.import('./flights');
models.Customers = sequelize.import('./customers');

// Relations;

models.Flights.hasMany(models.Customers, { foreignKey: 'flight_id' });
models.Customers.belongsTo(models.Flights, { foreignKey: 'flight_id' });


export default models;

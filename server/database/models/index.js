import models from '../config/db';

const { sequelize } = models;

models.Admin = sequelize.import('./admin');
models.Flights = sequelize.import('./flights');
models.Customers = sequelize.import('./customers');

// Relations;
models.Customers.belongsTo(models.Flights, {
  onDelete: 'CASCADE',
  foreignKey: 'customer_id',
  targetKey: 'id',
});

export default models;

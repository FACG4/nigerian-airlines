export default (sequelize, DataTypes) => {
  const Customers = sequelize.define('customers', {
    first_name: {
      type: DataTypes.STRING(20)
    },
    last_name: {
      type: DataTypes.STRING(20)
    },
    email: {
      type: DataTypes.STRING(30)
    },
    phone: {
      type: DataTypes.STRING(20)
    },
    notify_me: {
      type: DataTypes.STRING(20)
    }
  });
  return Customers;
}
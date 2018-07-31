export default (sequelize, DataTypes) => {
  const Customers = sequelize.define('customers', {
    first_name: {
      type: DataTypes.STRING(20)
    },
    last_name: {
      type: DataTypes.STRING(20)
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    notify_me: {
      type: DataTypes.BOOLEAN
    }
  });
  return Customers;
};

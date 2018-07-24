export default (sequelize, DataTypes) => {
  const Admin = sequelize.define('admin', {
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  });
  return Admin;
}
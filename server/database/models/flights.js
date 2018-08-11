
export default (sequelize, DataTypes) => {
  const Flights = sequelize.define('flights', {
    airline: {
      type: DataTypes.STRING,
    },
    airport: {
      type: DataTypes.STRING,
    },
    flight_no: {
      type: DataTypes.STRING,
      unique: true,
    },
    origin: {
      type: DataTypes.STRING,
    },
    flight_duration: {
      type: DataTypes.INTEGER,
    },
    destination: {
      type: DataTypes.STRING,
    },
    flight_date: {
      type: DataTypes.DATE,
    },
    departure_time: {
      type: DataTypes.DATE,
    },
    arrival_time: {
      type: DataTypes.DATE,
    },
    gate: {
      type: DataTypes.STRING,
    },
    terminal_no: {
      type: DataTypes.STRING,
    },
    aircraft: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  });
  return Flights;
};

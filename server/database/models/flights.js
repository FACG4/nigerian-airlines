export default (sequelize, DataTypes) => {
  const Flights = sequelize.define('flights', {
    airline: {
      type: DataTypes.STRING
    },
    airport: {
      type: DataTypes.STRING
    },
    flight_id: {
      type: DataTypes.STRING
    },
    origin: {
      type: DataTypes.STRING
    },
    destination: {
      type: DataTypes.STRING
    },
    departure_time: {
      type: DataTypes.DATE
    },
    flight_time: {
      type: DataTypes.DATE
    },
    gate: {
      type: DataTypes.STRING
    },
    aircraft: {
      type: DataTypes.STRING
    }
  });
  return Flights;
}
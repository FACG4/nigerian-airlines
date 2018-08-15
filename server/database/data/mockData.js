import models from '../models/index';

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

models.sequelize.sync({ force: true }).then(async () => {
  await models.Admin.create({
    username: 'admin',
    password: '$2a$10$q5rMuzhOm95MvKB2Ed3edelE1ciM4K.gRR1Ddo96RpU8Tz2jLyznS',
    email: 'admin@admin.com',
  });

  await models.Flights.bulkCreate([
    {
      airline: 'Air Peace',
      airport: 'Akanu Ibiam International Airport',
      flight_no: 'APK-001',
      origin: 'Abuja',
      destination: 'Enugu',
      departure_time: '09-15-2018 22:00:00',
      arrival_time: '09-16-2018 09:00:00',
      gate: 'W-10',
      terminal_no: 'T-1',
      aircraft: 'Airbus A321',
      flight_date: '09-15-2018 22:00:00',
      flight_duration: 3,
      status: 'Cancelled',
    },
    {
      airline: 'Associated Aviation',
      airport: 'Nnamdi Azikiwe International Airport',
      flight_no: 'SCD-005',
      origin: 'Surulere',
      destination: 'Enugu',
      departure_time: '09-15-2018 22:00:00',
      arrival_time: '09-16-2018 09:00:00',
      gate: 'W-10',
      terminal_no: 'T-1',
      aircraft: 'Embraer ERJ 145',
      flight_date: '09-15-2018 22:00:00',
      flight_duration: 5,
      status: 'Cancelled',
    },
  ]);
  await models.Customers.bulkCreate([
    {
      first_name: 'Abdalsamad',
      last_name: 'Abumusameh',
      email: 'abdalsamad.y.m@gmail.com',
      phone: '0599194310',
      notify_me: false,
      flight_id: 1,
    },
    {
      first_name: 'Balsam',
      last_name: 'Ashi',
      email: 'balsam@gmail.com',
      phone: '0599000001',
      notify_me: false,
      flight_id: 1,
    },
    {
      first_name: 'Inass',
      last_name: 'T.',
      email: 'inass@gmail.com',
      phone: '+970567716309',
      notify_me: true,
      flight_id: 1,
    },
    {
      first_name: 'Inasssssss',
      last_name: 'T.sddddddddddd',
      email: 'inassssssssss@gmail.com',
      phone: '+97056771638809',
      notify_me: true,
      flight_id: 1,
    },
    {
      first_name: 'Ramy',
      last_name: 'Shurafa',
      email: 'Ramy@gmail.com',
      phone: '05990000003',
      notify_me: false,
      flight_id: 2,
    },
    {
      first_name: 'John',
      last_name: 'Johnn',
      email: 'rees@gmail.com',
      phone: '05990000004',
      notify_me: false,
      flight_id: 2,
    },
    {
      first_name: 'Root',
      last_name: 'hani',
      email: 'root@gmail.com',
      phone: '05990000006',
      notify_me: false,
      flight_id: 2,
    },
    {
      first_name: 'Finch',
      last_name: 'H.',
      email: 'finch@gmail.com',
      phone: '05990000009',
      notify_me: false,
      flight_id: 2,
    },
  ]);
  await models.sequelize.close();
});

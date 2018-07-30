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
    username: 'inass',
    password: '$2y$12$Kg9mAf94WcFlb0VwBerwPO1degy64fELmt15pD8NjiP0Bcm5UytdW',
    email: 'admin@admin.com'
  });

  await models.Flights.bulkCreate([
    {
      airline: 'Gaza Airlines',
      airport: 'Gaza Airport',
      flight_no: 'GA001',
      origin: 'Gaza',
      destination: 'Berlin',
      departure_time: '09-15-2018 22:00:00',
      arrival_time: '09-16-2018 09:00:00',
      gate: 'W-10',
      aircraft: 'BW',
    },
    {
      airline: 'Nigeria Airlines',
      airport: 'Lagos',
      flight_no: 'NA001',
      origin: 'Lagos',
      destination: 'Aboja',
      departure_time: '09-15-2018 22:00:00',
      arrival_time: '09-16-2018 09:00:00',
      gate: 'W-10',
      aircraft: 'BW',
    },
    
  ]);
  await models.Customers.bulkCreate([
    {
      first_name: 'Abdalsamad',
      last_name: 'Abumusameh',
      email: 'abdalsamad.y.m@gmail.com',
      phone: '0599194310',
      notify_me: true,
      flight_id: 1
    },
    {
      first_name: 'Balsam',
      last_name: 'Ashi',
      email: 'balsam@gmail.com',
      phone: '0599000001',
      notify_me: true,
      flight_id: 1
    },
    {
      first_name: 'Inass',
      last_name: 'T.',
      email: 'inass@gmail.com',
      phone: '05990000002',
      notify_me: false,
      flight_id: 1
    },
    {
      first_name: 'Ramy',
      last_name: 'Shurafa',
      email: 'Ramy@gmail.com',
      phone: '05990000003',
      notify_me: true,
      flight_id: 1
    },
    {
      first_name: 'John',
      last_name: 'Rees',
      email: 'rees@gmail.com',
      phone: '05990000004',
      notify_me: true,
      flight_id: 2
    },
    {
      first_name: 'Root',
      last_name: 'Sam',
      email: 'root@gmail.com',
      phone: '05990000006',
      notify_me: true,
      flight_id: 2
    },
    {
      first_name: 'Finch',
      last_name: 'H.',
      email: 'finch@gmail.com',
      phone: '05990000009',
      notify_me: true,
      flight_id: 2
    },
  ]);
  await models.sequelize.close();
});
require('dotenv').config();
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const mongoDB = require('./db');
const startKeepAlive = require('./keepAlive');

mongoDB();

app.use(express.json());

const corsOrigin = process.env.CORS_ORIGIN;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', corsOrigin);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json())
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  startKeepAlive(); // Start the keep-alive pings
});

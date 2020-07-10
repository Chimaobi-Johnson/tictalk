const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const authRoutes = require('./routes/authRoutes');
const appRoutes = require('./routes/appRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // to parse incoming json data


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(authRoutes);
app.use(appRoutes);


app.use((error, req, res, next) => {
  console.log(error);
    res.status(error.httpStatusCode).json({ message: error.message })
})

const PORT = 8000 || process.env.PORT;

mongoose.connect(keys.MONGOURI)
.then(connected => {
	console.log('Database Connected');
}).catch(err => {
	console.log(err);
})
app.listen(PORT);

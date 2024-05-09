/  # UPDATED /
const express = require('express');
const mongoose = require('mongoose');
const { connectDb, checkconnected } = require('./db');
const routes = require('./route.js');

const app=express()
const port =3000
app.use(express.json());
// app.get('/ping', (req, res) => {
//   res.send('pong');
// });
// app.get('/', (req, res) => {
//   if (checkconnected()) {
//     res.send('Database connection status: Connected');
//   } else {
//     res.send('Database connection status: Connection failed');
//   }
// });

app.use('/api', routes);
connectDb()
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
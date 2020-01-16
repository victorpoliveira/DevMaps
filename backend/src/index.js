const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

mongoose.connect('mongodb+srv://apokrypho:@ds.31151510@clusterdevmaps-vitmi.mongodb.net/devmaps?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
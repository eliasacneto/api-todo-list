const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskRoute = require('./routes/taskRoute');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.json({ message: '👋 Welcome to TO DO API! ' })
})

app.use('/tasks', taskRoute)

module.exports = app;
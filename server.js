const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// in memory db
const db = require('./config/db.config');

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome, this is the root url.' });
});

// routes
require('./routes/index.routes')(app);

// Set port, listen for request
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

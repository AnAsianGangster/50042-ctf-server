const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "frontend", "build")))
app.use(express.static("public"));

// in memory db
const db = require('./config/db.config');

// simple route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
})

// routes
require('./routes/index.routes')(app);

// Set port, listen for request
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

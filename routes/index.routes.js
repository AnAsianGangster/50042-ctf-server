module.exports = (app) => {
    const router = require('express').Router();

    // login routes
    require('./login.routes')(router);

    // root routes
    app.use('/test', router);
};

module.exports = (router) => {
    const CTFFunctions = require('../controllers/login.controller.js');

    router.post('/login', CTFFunctions.AllFunctions);
};

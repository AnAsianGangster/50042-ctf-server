module.exports = (router) => {
    const CTFFunctions = require('../controllers/login.controller.js');

    // post /login route
    router.post('/login', CTFFunctions.loginFunction);

    // post /edit route
    router.post('/edit', CTFFunctions.editFunction);

    // get /profile route
    router.get('/profile', CTFFunctions.profileFunction);
};

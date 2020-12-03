module.exports = (router) => {
    const CTFFunctions = require('../controllers/login.controller.js');

    /**
     * login with their given password
     */
    router.post('/login', CTFFunctions.loginFunction);

    /**
     * verify with their admin password
     * correct: proceed
     * wrong: xor c
     */
    router.post('/xor', CTFFunctions.xorFunction)

    /**
     * verify with their caeser
     * correct: responde flag
     * wrong: return randomize text
     */
    router.post('/caesar', CTFFunctions.caesarFunction);
};

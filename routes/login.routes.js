module.exports = (router) => {
    const CTFFunctions = require('../controllers/login.controller.js');

    /**
     * login with their given password
     * TODO grant jwt
     */
    router.post('/login', CTFFunctions.loginFunction);

    /**
     * verify with their cracked password to get their admin password
     * correct: proceed
     * wrong: respond attempt password
     */
    router.post('/admin', CTFFunctions.adminFunction);

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

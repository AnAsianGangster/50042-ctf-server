const utilXOR = require('./util/XOR.controllers.util'); // NOTE sample import of naive XOR

exports.loginFunction = (req, res) => {
    // TODO ctf functions are returned here

    // NOTE sample import of naive XOR
    console.log(utilXOR.XOR(5, 6));

    res.status(200).send({
        message: 'login end point hit',
    });
};

exports.editFunction = (req, res) => {
    // TODO ctf functions are returned here

    res.status(200).send({
        message: 'edit end point hit',
    });
};

exports.profileFunction = (req, res) => {
    // TODO ctf functions are returned here

    res.status(200).send({
        message: 'profile end point hit',
    });
};

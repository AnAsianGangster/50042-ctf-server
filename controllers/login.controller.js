const db = require('../models/index.model');

const utilCheckPwd = require('./util/checkPwd.controllers.util');

exports.loginFunction = (req, res) => {
    const groupNumber = req.body.groupNumber;
    const password = req.body.password;

    const c = db.groups[groupNumber].c;
    const actualPassword = db.groups[groupNumber].password;

    // TODO use this checkPwd
    const checkedPassword = utilCheckPwd.checkPwd(password, actualPassword);

    if (c == checkedPassword) {
        res.status(200).send({
            message: 'correct password',
        });
    } else {
        res.status(401).send({
            checkedPassword: checkedPassword,
            message: 'incorrect password',
        });
    }
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

const db = require('../models/index.model');
const logger = require('../config/logger');

const utilCaesar = require('./util/caesar.controllers.util');
const utilCheckPwd = require('./util/checkPwd.controllers.util');
const utilRandomMap = require('./util/randomMap.controllers.util');

exports.loginFunction = (req, res) => {
    const groupNumber = req.body.groupNumber;
    const loginPassword = req.body.loginPassword;

    const actualLoginPassword = db.groups[groupNumber].loginPassword;

    if (loginPassword == actualLoginPassword) {
        res.status(200).send({
            message: 'proceed',
        });
        logger.log('info', `group ${groupNumber} has successfully login`);
        return;
    } else {
        res.status(250).send({
            message: 'incorrect password',
        });
        logger.log('info', `group ${groupNumber} has failed login`);
        return;
    }
};

exports.xorFunction = (req, res) => {
    const groupNumber = req.body.groupNumber;
    const attemptAdminPassword = req.body.adminPassword;

    const actualAdminPassword = db.groups[groupNumber].adminPassword;

    const cipher = utilCheckPwd.checkPwd(attemptAdminPassword, actualAdminPassword);

    if (cipher == '00000000000000000000000000000000') {
        res.status(200).send({
            message: 'proceed',
            role: 'admin',
        });
        logger.log('info', `group ${groupNumber} has successfully cracked XOR`);
        return;
    } else {
        res.status(250).send({
            cipher: cipher,
            role: 'user',
        });
        logger.log('info', `group ${groupNumber} has failed cracking XOR`);
        return;
    }
};

exports.caesarFunction = (req, res) => {
    const groupNumber = req.body.groupNumber;
    const attemptCaesarText = req.body.caeserText;

    const actualCaeserText = db.groups[groupNumber].caeserText;
    const flag = db.groups[groupNumber].flag;

    // TODO some randomize function
    const alphabetMapping = utilRandomMap.generateMap();
    const cipher = utilCaesar.generateCaesarText(actualCaeserText, alphabetMapping);

    // console.log(alphabetMapping);

    if (attemptCaesarText == actualCaeserText) {
        res.status(200).send({
            flag: flag,
        });
        logger.log('info', `group ${groupNumber} has successfully get the flag`);
        return;
    } else {
        res.status(250).send({
            cipher: cipher,
        });
        logger.log('info', `group ${groupNumber} has failed cracked caesar cipher`);
        return;
    }
};

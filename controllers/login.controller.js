const db = require('../models/index.model');
const crypto = require('crypto');

const utilCaesar = require('./util/caesar.controllers.util');
const utilCheckPwd = require('./util/checkPwd.controllers.util');
const utilRandomMap = require('./util/randomMap.controllers.util');

exports.loginFunction = (req, res) => {
    const groupNumber = req.body.groupNumber;
    const loginPassword = req.body.loginPassword;

    const actualLoginPassword = db.groups[groupNumber].loginPassword;

    var shasum = crypto.createHash('sha1');
    shasum.update(db.groups[groupNumber].passwordToCrack);
    HashedPasswordToCrack = shasum.digest('hex');

    if (loginPassword == actualLoginPassword) {
        res.status(200).send({
            HashedPasswordToCrack: HashedPasswordToCrack,
        });
        return;
    } else {
        res.status(401).send({
            message: 'incorrect password',
        });
        return;
    }
};

exports.adminFunction = (req, res) => {
    const groupNumber = req.body.groupNumber;
    const attemptPasswordToCrack = req.body.attemptPasswordToCrack;

    const actualPasswordToCrack = db.groups[groupNumber].passwordToCrack;

    if (attemptPasswordToCrack == actualPasswordToCrack) {
        res.status(200).send({
            message: 'proceed',
        });
        return;
    } else {
        res.status(401).send({
            message: `${attemptPasswordToCrack} is not the password`,
        });
        return;
    }
};

exports.xorFunction = (req, res) => {
    const groupNumber = req.body.groupNumber;
    const attemptAdminPassword = req.body.adminPassword;

    const actualAdminPassword = db.groups[groupNumber].adminPassword;

    const cipher = utilCheckPwd.checkPwd(attemptAdminPassword, actualAdminPassword);

    if (attemptAdminPassword == actualAdminPassword) {
        res.status(200).send({
            message: 'proceed',
        });
        return;
    } else {
        res.status({
            cipher: cipher,
        });
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
        return;
    } else {
        res.status(401).send({
            cipher: cipher,
        });
        return;
    }
};

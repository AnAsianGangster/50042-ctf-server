const md5 = require('md5');

exports.checkPwd = (received, actual) => {
    const receivedHash = md5(received);
    const actualHash = md5(actual);

    let c = [];

    for (let i = 0; i < receivedHash.length; i++) {
        c.push((parseInt(receivedHash[i], 16) ^ parseInt(actualHash[i], 16)).toString(16));
    }

    return c.join('');
};

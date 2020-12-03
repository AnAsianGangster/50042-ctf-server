exports.generateCaesarText = (text, mapping) => {
    textArray = text.split('');

    cipherTextArray = [];

    for (let i = 0; i < textArray.length; i++) {
        if (mapping.hasOwnProperty(textArray[i])) {
            cipherTextArray.push(mapping[textArray[i]]);
        } else {
            cipherTextArray.push(textArray[i]);
        }
    }

    return cipherTextArray.join('');
};

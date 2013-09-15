module.exports = function (word) {
    return word.split('').sort().join('') === word;
};

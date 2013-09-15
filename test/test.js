var expect       = require('chai').expect,
    alphabetical = require('../alphabetical.js');

describe('alphabetical', function () {
    it('should return true for alphabetical words', function () {
        expect(alphabetical('abc')).to.be.true;
    });

    it('should return false for non-alphabetical words', function () {
        expect(alphabetical('acb')).to.be.false;
    })
});

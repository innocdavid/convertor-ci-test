// importing the required modules
const expect = require('chai').expect;
const convertor = require('../app/convertor');

describe('Color Code Convertor', () => {
  describe('RGB to Hex Conversion', () => {
    it('convert the basic colors', () => {
      var redHex   = convertor.rgbToHex(255, 0, 0);
      var greenHex = convertor.rgbToHex(0, 255, 0);
      var blueHex  = convertor.rgbToHex(0, 0, 255);

      // expected test result
      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");

    });
  });

  describe('HEX to RGB conversion', () => {
    it('convert the basic colors', () => {
      var red   = convertor.hexToRgb("ff0000");
      var green = convertor.hexToRgb("00ff00");
      var blue  = convertor.hexToRgb("0000ff");

      // expected test result
      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);

    });
  });
});
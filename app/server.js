// app/server.js
const express = require("express");
const app = express()
const port = 3000; // default
const converter = require("./convertor");
const logger = require('../logger/log')

app.get("/rgbToHex", function(req, res) {
  let red   = parseInt(req.query.red, 10);
  let green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);
  var hex = converter.rgbToHex(red, green, blue);
  res.send(hex);

});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;
  var rgb = converter.hexToRgb(hex);
  res.send(JSON.stringify(rgb));

});
// logger levels
logger.error("error");
logger.warn("warn");
logger.info("info");
logger.debug("debug");
logger.verbose("verbose");
logger.silly("silly");

app.listen(port, () => {
  logger.info("server listening on PORT " + port);
});
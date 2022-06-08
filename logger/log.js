// importing required modules
const { createLogger, transports } = require('winston');

const logger = createLogger({
  transports: [
    new transports.Console()
  ]
})

// exporting module
module.exports = logger;

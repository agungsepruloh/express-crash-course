// moment just for get current date, not a require for using logger
const moment = require("moment");

// Create logger
const logger = (req, res, next) => {
  // show log
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
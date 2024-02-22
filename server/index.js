const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");
const express = require("express");
const path = require("path");

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

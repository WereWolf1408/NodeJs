const HTTP_STATUS = require("http-status");  

function sendJsonData (res, data = {}, status = HTTP_STATUS.OK) {
  res.status(status).json(Object.assign({
    success: true,
  }, data));
}

function sendJsonError (res, error, status = HTTP_STATUS.BAD_REQUEST) {
  res.status(status).json(Object.assign({
    success: false
  }, error));
}

module.exports = {
  sendJsonData,
  sendJsonError,
}
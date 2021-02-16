var express = require('express');
var router = express.Router();
const getDiskInfo = require('../services/disk-info');
const {sendJsonData, sendJsonError} = require('../utils/response/utils.response');

router.get('/', function (req, res, next) {
  try {
    let diskInfo = getDiskInfo();
    sendJsonData(res, diskInfo);
  } catch (error) {
    sendJsonError(res, error);
  }
});

module.exports = router;
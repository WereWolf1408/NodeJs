var express = require('express');
var router = express.Router();
const {getDiskInfo, retrieveFilesByPath} = require('../services/disk-info');
const {sendJsonData, sendJsonError} = require('../utils/response/utils.response');

router.get('/', function (req, res, next) {
  try {
    let diskInfo = getDiskInfo();
    sendJsonData(res, diskInfo);
  } catch (error) {
    sendJsonError(res, error);
  }
});

router.get('/c', function (req, res, next) {
  try {
    sendJsonData(res, retrieveFilesByPath("D:/"));
  } catch(error) {
    sendJsonError(res, {errorMessage: error.message});
  }
});

module.exports = router;
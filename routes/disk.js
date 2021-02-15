var express = require('express');
var router = express.Router();
const getDiskInfo = require('../services/disk-info');

router.get('/', function (req, res, next) {
  let diskInfo = getDiskInfo();
  res.json(diskInfo)
});

module.exports = router;
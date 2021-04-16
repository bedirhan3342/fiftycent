const express = require('express');

const router = express.Router();

const etherScanController=require("../controller/etherScanController")


router.get('/single-balance', etherScanController.getEtherBalanceSingleAddress);


module.exports = router;

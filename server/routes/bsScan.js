const express = require('express');

const router = express.Router();

const bsScanController=require("../controller/bsScanController")

// All-User
router.get('/bs-single-balance', bsScanController.getBsScanSingleBalance);


module.exports = router;

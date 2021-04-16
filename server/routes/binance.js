const express = require('express');

const router = express.Router();

const binanceController=require("../controller/binanceController")

// All-User
router.get('/trade-history', binanceController.tradeHistory);
router.get("/balance",binanceController.getMyBalance);
router.get("/account",binanceController.getMyAccount);
router.get("/currency/:symbol",binanceController.getSymbolCurrentValue);
router.get("/price",binanceController.coin_price);
router.get("/my-trades",binanceController.getMyTrades);



module.exports = router;


const Binance = require('node-binance-api');
const binance = new Binance().options({
    APIKEY: 'S3AEufvRB6wKLHuarjpGnNNuISYbAZ8PcgVPoLBazBkNBPZ9wdBvtVCtO9GAJFVj',
    APISECRET: 'zr2obQkCc9ijIvcGpMGZSv2RCzsYLqRisAVYsJDHeideLN3WO4TH95jBtj7JDjfF'
});

const axios = require('axios');

const crypto = require('crypto');
const qs = require('qs');
const fs = require("fs");
const WebSocket = require('ws');
//const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

const each = require('foreach');
let list = {};
let available = {};
var list_trade = {};

const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "finance"
});

con.connect(function(err) {
    console.log("veri tabanına baglanıldı ");
});

con.query("SELECT * FROM veriler ", function (err, result, fields) {
    if (err) throw err;
    each(result, function (value, key, array) {
        list_trade[value.orderId] = 1 ;
    });
  });

update();
update2();



setTimeout(function(){
    console.log(list_trade)
  load();
},5000)

function load(){
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "finance"
    });

    con.connect(function(err) {
        console.log("veri tabanına baglanıldı ");
    });

    fs.readFile('symbol.txt', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      var str = data.split("\n");
      var i   = 0;
    
      check_symbol(binance,str,i);
    })
  }
  
  
  //


  async function check_symbol(binance,str,i){
    var cnt = str.length;
    if(i<cnt){
     // console.log(str[i])
      var e = str[i].trim();
  
      binance.trades(e, (error, trades, symbol) => {
        var sql = "INSERT INTO veriler (orderId, time, symbol, type, price, qty, quoteQty, site) VALUES (?)";
        each(trades, function (value, key, array) {
            if(list_trade[value.id] == 1){
               // console.log("kaytlı");
            }
            else{
                list_trade[value.id] = 1;
                con.query(sql,[[value.id, value.time, e, value.isBuyer, value.price, value.qty, value.quoteQty,"Binance"]] , function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted, ID: " + result.insertId);
                });
            }
            
    
        });

      });
  
      setTimeout(function(){
        check_symbol(binance,str,i+1);
      },1000);
    }else{
        con.end();

      setTimeout(function(){
        load();
      },6000);
    }
  }



const getMyBalance = async (req, res, next) => {
    return res.json(available)
}
const getMyTrades = async (req, res, next) => {
    return res.json(list_trade)
}
async function update2(){
    setTimeout(() => {
        update2();
        console.log("start update2")
    }, 10000);
    try {
        let data = await binance.balance();

        let elems = Object.entries(data).map(v => {
            var i = v[0].toLowerCase();
            return {
                name: v[0],
                status: {...v[1], ...list[i]},
            }
        });

        available = elems.filter((p) => Number(p.status.available) > 0);
        //   console.log(available)


       
    } catch (error) {
        return error;
    }

    
}


async function  update(){
    let dataa = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=PRICE_DESC&per_page=250&page=1&sparkline=false');
    each(dataa.data, function (value, key, array) {
        list[value.symbol] = {price:value.current_price,img:value.image};
    });
    dataa = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=PRICE_DESC&per_page=250&page=2&sparkline=false');
    each(dataa.data, function (value, key, array) {
       list[value.symbol] = {price:value.current_price,img:value.image};
    });
    dataa = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=PRICE_DESC&per_page=250&page=3&sparkline=false');
    each(dataa.data, function (value, key, array) {
       list[value.symbol] = {price:value.current_price,img:value.image};
    });

    dataa = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=PRICE_DESC&per_page=250&page=4&sparkline=false');
    each(dataa.data, function (value, key, array) {
       list[value.symbol] = {price:value.current_price,img:value.image};
    });
    dataa = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=PRICE_DESC&per_page=250&page=5&sparkline=false');
    each(dataa.data, function (value, key, array) {
       list[value.symbol] = {price:value.current_price,img:value.image};
    });
    setTimeout(() => {
        update()
        console.log("start update1")
    }, 10000);
    
}
//img:''img:value.image


const binanceConfig = {
    API_KEY: 'fAtKamnruwPgW5MMQHxxclriK2OYHwBAMv8nsxpitRvu4EHPKeYLo7LTEU42PQB3',
    API_SECRET: 'qPRgXr5EkrzNnvYE0SQVmlnqAyLDEFsJjBVpoB7NlCxLCAR2lPCqXM4LiwRs3SAz',
    HOST_URL: 'https://api.binance.com',
};

const buildSign = (data, config) => {
    return crypto.createHmac('sha256', config.API_SECRET).update(data).digest('hex');
};

const privateRequest = async (data, endPoint, type) => {
    const dataQueryString = qs.stringify(data);
    const signature = buildSign(dataQueryString, binanceConfig);
    const requestConfig = {
        method: type,
        url: binanceConfig.HOST_URL + endPoint + '?' + dataQueryString + '&signature=' + signature,
        headers: {
            "X-MBX-APIKEY": `${binanceConfig.API_KEY}`,
        },
    };

    try {

        const response = await axios(requestConfig);
        //console.log(response.data);
        return response.data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
};

const data = {
    //symbol: 'BTC',
    recvWindow: 20000,
    timestamp: Date.now(),
};


const tradeHistory = async (req, res, next) => {
    //console.log(binance)

    // const dataa=await privateRequest(data, '/sapi/v1/capital/config/getall', 'GET');
    // const cleanData=dataa.filter(p=>Number(p.free)>0);
    // console.log(cleanData)
    // console.log(cleanData.length)



    const dataa = await privateRequest(data, '/sapi/v1/capital/config/getall', 'GET');
    res.json(dataa);
}

const getSymbolCurrentValue = async (req, res, next) => {
   // console.log("---")
    try {
       // console.log(req.params)
        const dataa = await axios.get(`https://api.binance.com/api/v3/avgPrice?symbol=${req.params.symbol}USDT`);
        //console.log(dataa.data)
        res.json(dataa.data);
    } catch (error) {
        return error;
    }


}



const getMyAccount = async (req, res, next) => {
    try {
        let data = await binance.account();
        return res.json(data);
    } catch (error) {
        return error;
    }
}

const coin_price = async (req, res, next) => {
    res.json(list);
}





module.exports = {
    tradeHistory,
    getMyBalance,
    getMyAccount,
    getSymbolCurrentValue,
    coin_price,
    getMyTrades
}
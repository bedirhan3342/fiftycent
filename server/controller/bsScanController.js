
const axios = require('axios');
axios.defaults.baseURL = 'http://api.bscscan.com/api'



const getBsScanSingleBalance = async (req, res, next) => {
    let module = 'stats';
    let action = 'dailytxnfee';
    let contractaddress = '0xb019910AC31Bf5881d10AA2B68000df9d33f24c9'//BlockChainKey;
    let tag = 'latest';
    let apikey = 'P5A8FSK1Q1E51S844EJF9JXIWQA8VG5CGE';

    console.log("----")
    try {
       // let response=await axios.get('https://api.bscscan.com/api?')
        let response = await axios.get(`?module=${module}&action=${action}&contractaddress=${contractaddress}&tag=${tag}&apikey=${apikey}`);
        console.log(response)
        res.json(response)
    } catch (error) {
        res.json(error);
    }

}



module.exports = {
    getBsScanSingleBalance,

}
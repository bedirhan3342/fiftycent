
const axios = require('axios');
axios.defaults.baseURL = 'http://api.etherscan.io/api'



const getEtherBalanceSingleAddress = async (req, res, next) => {
    let module = 'account';
    let action = 'balance';
    let address = '0xb019910AC31Bf5881d10AA2B68000df9d33f24c9'//BlockChainKey;
    let tag = 'latest';
    let apikey = 'X6QF74E6QN4DWHMK5TQX9TTWZGADK3N9G6';

    try {
        let response = await axios.get(`?module=${module}&action=${action}&address=${address}&tag=${tag}&apikey=${apikey}`);
        console.log(response.data)
        res.json(response)
    } catch (error) {
        res.json(error);
    }

}



module.exports = {
    getEtherBalanceSingleAddress,

}
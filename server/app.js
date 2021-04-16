const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use("/api",require("./routes/binance"));
app.use("/api",require("./routes/etherScan"));
app.use("/api",require("./routes/bsScan"));
app.listen(3001, (err) => {
    if (err)
        return err;

    console.log('Listening On 3001')
})

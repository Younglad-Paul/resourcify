const express = require('express');
require("./config/db")


const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message : 'server up!'});
});


const port = process.env.PORT || 2023;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

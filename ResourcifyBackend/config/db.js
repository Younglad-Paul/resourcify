const mongoose = require('mongoose');
// const {mongoose} = require('mongoose')


const URI = 'mongodb://127.0.0.1:27017/resourcify';
mongoose.connect(URI);
mongoose.connection
    .on('open', () => {
        console.log("database is connected!")
    })
    .once("error", (error) => {
        console.log(`Server failed ${error}`)
    })

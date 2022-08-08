const config =  require('./config.js');
const express =  require('express');
const app =  express();
let mode = '';

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
    res.send('Hello World !!    Database: ' + process.env.DB_HOST);
});

app.listen(config.PORT, () => {
    console.log(`APP LISTENING ON http://localhost:${config.PORT}`);
})
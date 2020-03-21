const express = require('express');
const app = express();
const utils = require ('./utils.js');

app.get('/', function (req, res){
    res.send('Formation Node')
})

app.get('/about', function (req, res){
    res.send('A propos')
})

app.get('/nouscontacter', async function (req, res){
    const data = await utils.geome();
    const location = await utils.meteo(data.longitude,data.latitude)
    const email = await utils.mail('devjeanpaul@gmail.com','jeanpauldatte@gmail.com','test formation',location)
    res.send(location)
})


app.listen(3000, function (){
    console.log('serveur en ligne')
})
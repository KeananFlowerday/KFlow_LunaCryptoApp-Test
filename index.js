import express from 'express';
import fetch from 'node-fetch';
const PORT = 5000;

const app = express();




app.get('/HealthCheck', (req, res) => {
    res.send({Status: '1'});

});

app.get('/valr', (req, res) => {  
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.valr.com/v1/public/marketsummary", requestOptions)
        .then(response => response.text())
        .then(result => res.send(result))
        .catch(error => res.send('error', error));
});   

app.get('/chainex', (req, res) => {  
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.chainex.io/market/summary/", requestOptions)
        .then(response => response.text())
        .then(result => res.send(result))
        .catch(error => res.send('error', error));
});   


app.get('/', (req, res) => {
    const valrRes = await fetch('https://api.valr.com/v1/public/marketsummary');
    var valrData = [await valrRes.json()];

    const chainexRes = await fetch('https://api.chainex.io/market/summary/');
    var chainexData = [await chainexRes.json()];

    var shareData = [];

    for(vitem in valrData){
        for(citem in chainexData){
            if(valrData[vitem].currencyPair == (chainexData[citem].code+chainexData[citem].exchange) && valrData[vitem]. &&){
        shareData.push();
            };
        }
    }

    res.send({Hey: 'World'});

});

app.listen(PORT);




//Valr
//https://api.valr.com/v1/public/marketsummary

//ChainEX
//GET
// https://api.chainex.io/market/summary/
import express from 'express';
import fetch from 'node-fetch';
const PORT = 5000;

const app = express();


async function calculateMarkets(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    //Valr
var valrData = await fetch("https://api.valr.com/v1/public/marketsummary", requestOptions)
    .then(valrRes => valrRes.json())
    .then(data => valrData = data)
    .then(() => console.log('valrData'))       
    .catch(error => console.log('error', error));

//Chainex
var chainexData = await fetch("https://api.chainex.io/market/summary/", requestOptions)
.then(chainexRes => chainexRes.json())
.then(data => chainexData = data)
.then(() => console.log('chainexData'))       
.catch(error => console.log('error', error));

var shareData ;



/*    for(vitem in valrData){
        console.log(valrData[vitem])
        for(citem in chainexData){
            console.log(valrData[vitem]);
            if(
                valrData[vitem].currencyPair  === (chainexData[citem].code+chainexData[citem].exchange) || 
                valrData[vitem].currencyPair  === (chainexData[citem].exchange+chainexData[citem].code))
                {
                    shareData.push({valrItem: valrData[vitem], chainexItem: chainexData[citem]});
                };
        }
    }
*/
return shareData

}

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
    
    
    res.send(calculateMarkets());

});

app.listen(PORT);




//Valr
//https://api.valr.com/v1/public/marketsummary

//ChainEX
//GET
// https://api.chainex.io/market/summary/
const express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload');

router.get('/', (req, res) => {
    res.render('index');
})

router.post('/results', (req, res) => {
    var data = req.files['upload']['data'];
    data = data.toString('utf8');
    data = data.substring(1);
    data = JSON.parse(data);
    data = data['scriptData']['masterDataObj'];
    var output = {};
    for( key in data ){
        if( key.includes("StatsStartClass") ){
            if( key.includes("Play") ){
                var TOLclass = key.substring(key.indexOf('Class') + 5, key.indexOf('Play'));
                var wins = data['StatsStartClass' + TOLclass + 'WinCountWIP'];
                var plays = data['StatsStartClass' + TOLclass + 'PlayCountWIP'];
                if( wins !== null && plays !== null ){
                    output[TOLclass] = "% " + Number.parseFloat(wins/plays * 100).toPrecision(4);
                }
            }
        }
    }
    res.render('results', {
        content : output
    });
})


module.exports = router;

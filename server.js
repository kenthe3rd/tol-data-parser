const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(fileUpload());

const index = require('./routes/index');
app.use('/', index);

app.listen(47856, (err) => {
    if(err){
        console.error(err);
    }
});
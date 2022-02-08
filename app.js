const express = require('express');
const app = express();
const loginRoutes = require('./api/routes/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./api/routes/user')
const environment = require('./nodemon.json');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json({});
    }
})
app.use('user',auth);

module.exports = app;





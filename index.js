
const express = require('express');
const ConnectMongoDb = require('./connection');
const logReqRes = require('./middlewares');
const router = require('./routes/user');
const app = express();


ConnectMongoDb('mongodb://localhost:27017/Test').then(()=>{console.log('Connected to MongoDB')}).catch((err)=>{console.log(err)});

app.use(express.urlencoded({extended:false}));


app.use(logReqRes('log.txt'));
// Router
app.use('/api/users',router);// this line says that all the routes in the user.js file will be prefixed with /users

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
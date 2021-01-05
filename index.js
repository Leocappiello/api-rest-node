const morgan = require('morgan'); //middle
const express = require('express');
const app = express();


//env
var env = require('node-env-file');
env(__dirname + '/.env');

let port;

if(process.env.PORT) {
    port = process.env.PORT;
  } else {
    port = 3000;
}

//json
app.set('json spaces', 2);

//middle
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//router
app.use(require('./routes/index'));
app.use('/api/series', require('./routes/series'));

//start server listen
app.listen(port, () =>{
    console.log(`server in port ${port}`)
});
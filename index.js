const express = require('express')
const server = express();
const path = require('path');
const bodyParser = require('body-parser');


const loginRequestHandler = (req, res) => {
    // let body = "";
    // req.on('data', chunk => {
    //     body += chunk
    // });
    // req.on('end', () => {
    //     console.log(body);
    // });
    console.log(req.body)

    res.send('done');
    }

  



        // Middlewares
        server.use(express.static(path.join(__dirname, 'public')));
        server.use(bodyParser.urlencoded({extended:false}))

        //routes
server.post('/register', loginRequestHandler);



server.listen(3000,  ()=>{console.log('server is ready')})
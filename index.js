const express = require('express')
const path = require('path')
const server = express('server');

// server.use(express.static(path.join(__dirname, 'public')))
// const Generalmiddleware = (req, res, next) => {
// console.log('General middleware working');
//     next();
// }

// Middlewares
const loginMiddleware = (req, res, next) => {
    console.log('login middleware working');
        next();
    }
 const signupMiddleware = (req, res, next) => {
        console.log('signup middleware working');
            next();
        }
const profileMiddleware = (req, res, next) => {
     console.log('profile middleware working');
                next();
            }
const itemMiddleware = (req, res, next) => {
         console.log('items middleware working');
                 next();
                       }
const productsMiddleware = (req, res, next) => {
        console.log('product middleware working');
                    next();
                               }
                               
                              // serving pages
const serveHome = (req, res)=>{
    const homepageFile = path.join(__dirname, 'public', 'index.html');
    res.sendFile(homepageFile)
}
const serveLogin = (req, res)=>{
    const homepageFile = path.join(__dirname, 'public', 'login.html');
    res.sendFile(homepageFile)
}
const serveSignup = (req, res)=>{
    const homepageFile = path.join(__dirname, 'public', 'signup.html');
    res.sendFile(homepageFile)
}
const serveItem = (req, res)=>{
    const homepageFile = path.join(__dirname, 'public', 'item.html');
    res.sendFile(homepageFile)
}
const serveProduct = (req, res)=>{
    const homepageFile = path.join(__dirname, 'public', 'product.html');
    res.sendFile(homepageFile)
}
const serveProfile = (req, res)=>{
    const homepageFile = path.join(__dirname, 'public', 'profile.html');
    res.sendFile(homepageFile)
}

// server.use(Generalmiddleware)

//Home
server.get('/', serveHome );

//login
server.get('/login', loginMiddleware, serveLogin);
// server.post('/login', loginMiddleware, serveLogin);
// server.put('/login', loginMiddleware, serveLogin);

//signup
server.get('/signup', signupMiddleware, serveSignup);
// server.post('/signup', signupMiddleware,serveSignup);
// server.put('/signup', signupMiddleware, serveSignup);

//profile
server.get('/profile', profileMiddleware, serveProfile);
// server.post('/profile', profileMiddleware,  serveProfile);
// server.put('/profile', profileMiddleware,  serveProfile)

//item
server.get('/items', itemMiddleware, serveItem);
// server.post('/items', itemMiddleware, serveItem);
// server.put('/items', itemMiddleware, serveItem);

//product
server.get('/products', productsMiddleware, serveProduct);
// server.post('/products', profileMiddleware, serveProfile);
// server.put('/products', profileMiddleware, serveProfile);





server.listen(3000,  ()=>{console.log('server is ready')})
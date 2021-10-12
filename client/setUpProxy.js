// const proxy=require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');

// ?app why
module.exports=function(app){

    // ?what do ?
    app.use,'/api',createProxyMiddleware({target:'http://localhost:5000',changeOrigin: true})
}
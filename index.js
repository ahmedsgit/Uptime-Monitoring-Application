/*
 * Title: Uptime Monitoring Application
 * Description: A Restful API to Monitor up or downtime of user define links
 * Author: Ahmed Sazzad
 * Date: 7/20/2021
 *
 */

// dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    PORT: 3000,
};

// create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.PORT, () => {
        console.log(`Server Running on Port - ${app.config.PORT}`);
    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // handle Request
    // get the url and parse it
    // const parsedUrl = new URL(req.url, `http://localhost:${app.config.PORT}/`);
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const queryStringObject = parsedUrl.query;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const headerObject = req.headers;

    // object of string_decoder
    const decoder = new StringDecoder('utf-8');

    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // handle Response
        res.end('Response Called!');
    });
};

// Start the server
app.createServer();

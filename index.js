/*
 * Title: Uptime Monitoring Application
 * Description: A Restful API to Monitor up or downtime of user define links
 * Author: Ahmed Sazzad
 * Date: 7/20/2021
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

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
app.handleReqRes = handleReqRes;

// Start the server
app.createServer();

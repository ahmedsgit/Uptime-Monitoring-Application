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
const environment = require('./helpers/environments');

// app object - module scaffolding
const app = {};

// create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Server Running on Port - ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// Start the server
app.createServer();

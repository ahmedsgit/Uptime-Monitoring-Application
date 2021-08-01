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
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// (dir, file, data, callback)
data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
    console.log(`error was ${err}`);
});

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

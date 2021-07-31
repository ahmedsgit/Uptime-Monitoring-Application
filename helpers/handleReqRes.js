/*
 * Title: Handle Request Response
 * Description: Handle Request & Response
 * Author: Ahmed Sazzad
 * Date: 7/31/2021
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // handle Request
    // get the url and parse it
    // const parsedUrl = new URL(req.url, `http://localhost:${app.config.PORT}/`);
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const queryStringObject = parsedUrl.query;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const headerObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject,
    };
    // object of string_decoder
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const choosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    choosenHandler(requestProperties, (statusCode, payload) => {
        const StatusCode = typeof statusCode === 'number' ? statusCode : 500;
        const Payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(Payload);

        // return the final response
        res.writeHead(StatusCode);
        res.end(payloadString);
    });

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

module.exports = handler;

/*
 * Title: Routes
 * Description: Application Routes
 * Author: Ahmed Sazzad
 * Date: 7/31/2021
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;

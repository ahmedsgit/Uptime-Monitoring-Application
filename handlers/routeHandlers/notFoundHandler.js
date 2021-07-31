/*
 * Title: Not Found Handler
 * Description: 404(STATUS_CODE) Not Found Handler
 * Author: Ahmed Sazzad
 * Date: 7/31/2021
 *
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your Requested URL not found',
    });
};

// export properties
module.exports = handler;

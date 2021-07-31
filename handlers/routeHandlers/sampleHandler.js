/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Ahmed Sazzad
 * Date: 7/31/2021
 *
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is sample Url',
    });
};

// export properties
module.exports = handler;

/*
 * Title: Data
 * Description: Data handling
 * Author: Ahmed Sazzad
 * Date: 8/1/2021
 *
 */

// dependencies
const fs = require('fs');
const path = require('path');

const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data');

// write data to file
lib.create = (dir, file, data, callback) => {
    fs.open(`${`${lib.basedir}/${dir}`}/${file}.json`, 'wx', (err, fileDesciptor) => {
        if (!err && fileDesciptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDesciptor, stringData, (error) => {
                if (!error) {
                    fs.close(fileDesciptor, (newError) => {
                        if (!error) {
                            callback(false);
                        } else {
                            callback(`Error(${newError}) writing to new file!`);
                        }
                    });
                } else {
                    callback(`Error(${error}) writing to new file!`);
                }
            });
        } else {
            callback('File Already Exist');
        }
    });
};
lib.read = (dir, file, callback) => {
    fs.readFile(`${`${lib.basedir}/${dir}`}/${file}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};
module.exports = lib;

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

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${`${lib.basedir}/${dir}`}/${file}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};

// update existing file
lib.update = (dir, file, data, callback) => {
    fs.open(`${`${lib.basedir}/${dir}`}/${file}.json`, 'r+', (err, fileDesciptor) => {
        if (!err && fileDesciptor) {
            // convert the data to string
            const stringData = JSON.stringify(data);

            // truncate the file
            fs.ftruncate(fileDesciptor, (err1) => {
                if (!err1) {
                    // write to the file and close if
                    fs.writeFile(fileDesciptor, stringData, (err2) => {
                        if (!err2) {
                            // close the file
                            fs.close(fileDesciptor, (err3) => {
                                if (!err3) {
                                    callback(false);
                                } else {
                                    callback('Error closing File');
                                }
                            });
                        } else {
                            callback('Error writing to file');
                        }
                    });
                } else {
                    callback('Error truncating File');
                }
            });
        } else {
            console.log('Error updating. File may not exist');
        }
    });
};

// delete existing file
lib.delete = (dir, file, callback) => {
    fs.unlink(`${`${lib.basedir}/${dir}`}/${file}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            callback('Error deleting file');
        }
    });
};
module.exports = lib;

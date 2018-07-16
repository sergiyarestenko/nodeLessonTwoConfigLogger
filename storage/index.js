const logger = require('logger').logger;

const mongoose = require('mongoose');

const config = require('config');

mongoose.Primise = global.Primise;

const db = mongoose.connection;

module.exports = db;
module.exports.disconnect = mongoose.disconnect;
module.exports.init = () => new Promise((resolve, reject) => {

    mongoose.connect(config.get('db:uri'), config.get('db:connect'));
    db.once('error', (error) => {
        reject(error);
    });

    db.once('open', () => {
        db.on('error', (error) => {
            logger.error(error)
        });
        resolve();
    })
});
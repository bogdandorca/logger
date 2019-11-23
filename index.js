const ExoLogger = require('./exologger');

let logger = null;

module.exports = function(file) {
    if (!logger) {
        logger = new ExoLogger(file);
    }
    return logger;
};
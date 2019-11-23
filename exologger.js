const fs = require('fs');

class ExoLogger {
    constructor(file) {
        this.file = `./${file}`;
    }

    log(type, component, info) {
        const now = new Date();
        const newLog = `${now}:  ${type}:  ${component}:  ${info} \r\n`;
        let content = fs.readFileSync(this.file);
        content += newLog;
        fs.writeFile(this.file, content, { flag: 'w' }, (err) => {});
    }
}

module.exports = ExoLogger;
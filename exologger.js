const fs = require('fs');

class ExoLogger {
    constructor(file) {
        this.file = `./${file}`;
    }

    error(component, details) {
        this.log('ERR', component, details);
    }

    warn(component, details) {
        this.log('WARN', component, details);
    }

    log(type, component, details) {
        const now = new Date();
        const newLog = `${now}:  ${type}:  ${component}:  ${details} \r\n`;
        let content = fs.readFileSync(this.file);
        content += newLog;
        fs.writeFile(this.file, content, { flag: 'w' }, (err) => {});
    }
}

module.exports = ExoLogger;
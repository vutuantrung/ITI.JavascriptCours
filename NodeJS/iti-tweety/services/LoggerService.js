const fs = require('fs');

/**
 * Log into a given file using fs api
 * https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
 */
export class LoggerService {

    constructor(filePath) {
        this.filePath = filePath;    
    }

    /**
     * Write an info log message
     * Prefix messages with  "INFO: "
     */
    info(message) {
        
        // TODO use fs.writeFile to log data 
    }

    /**
     * Write an error log message.
     * Prefix errors with  "ERROR: "
     */
    error(error) {
        // TODO use fs.writeFile to log errors 
    }
}

module.exports = LoggerService;
const winston = require('winston');
const logFile = winston.createLogger({transports: [    new winston.transports.File({ filename: 'logs.txt' }),],});

function logger(type, content, color, logToFile){
    let loggerPrefix = '';
    let loggerColor = '';

    switch (type){
        case "warn":
            loggerPrefix = "[ ❗] ";
            break;
        case "warn-deny":
            loggerPrefix = "[ ❗] [ ❌ ] ";
            break;
        case "deny":
            loggerPrefix = "[ ❌ ] ";
            break;
        case "success":
            loggerPrefix = "[✔️  ] ";
            break;
        case "warn-success":
            loggerPrefix = "[ ❗] [✔️  ] ";
            break;
        case "info": 
            loggerPrefix = "[🔹] ";
            break;
        case "log": 
            loggerPrefix = "[➖ ] ";
            break;
        default:
            loggerPrefix = "";
            break;
    }

    switch(color){
        case "black":
            loggerColor = "\x1b[30m";
            break;
        case "red":
            loggerColor = "\x1b[31m";
            break;
        case "green":
            loggerColor = "\x1b[32m";
            break;
        case "yellow":
            loggerColor = "\x1b[33m";
            break;
        case "blue":
            loggerColor = "\x1b[34m";
            break;
        case "magenta":
            loggerColor = "\x1b[35m";
            break;
        case "cyan":
            loggerColor = "\x1b[36m";
            break;
        case "white":
            loggerColor = "\x1b[37m";
            break;
        case "gray":
            loggerColor = "\x1b[90m";
            break;
        case "crimson":
            loggerColor = "\x1b[38m";
            break;
        default:
            loggerColor = "\x1b[0m";
            break;
    }

    if(logToFile === true){logFile.info(loggerPrefix+content)}
    return console.log(loggerColor,loggerPrefix+content);
}

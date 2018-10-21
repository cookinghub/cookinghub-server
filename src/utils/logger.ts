import * as winston from "winston";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
    winston.format.timestamp(),
  ),
  level: "debug",
  transports: [new winston.transports.Console()],
});

export { logger };

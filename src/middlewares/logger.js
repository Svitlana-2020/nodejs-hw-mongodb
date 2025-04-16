import pino from "pino-http";
import PinoPretty from "pino-pretty";

export const logger = pino ({
    transport: {
        target: "pino-pretty"
    }
});

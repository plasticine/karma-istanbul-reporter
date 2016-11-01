// @flow

export type Logger = {debug: Function, info: Function, warn: Function, error: Function}
export type LoggerFactory = () => Logger;

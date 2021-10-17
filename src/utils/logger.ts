import dayJs from 'dayjs';
import logger from 'pino';

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayJs().format()}"`,
});

export { log };

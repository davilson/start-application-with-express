import { serverConfig } from '@Configs/server';
import { log } from '@Utils/logger';

import { app } from './app';

app.listen(serverConfig.port, () => {
  log.info(`App listening at http://localhost:${serverConfig.port}/`);
});

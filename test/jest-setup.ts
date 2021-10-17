import supertest from 'supertest';

import { app } from '../src/app';

beforeAll(() => {
  global.supertestServer = supertest(app);
});

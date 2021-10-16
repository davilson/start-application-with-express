import express from 'express';

import { createRoutes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

createRoutes(app);

export { app };

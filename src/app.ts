import 'reflect-metadata';
// import 'dotenv/config';

import express from 'express';
// import cors from 'cors';
// import 'express-async-errors';

import routes from './routes';
// import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());
// app.use(cors());
app.use(routes);

export default app;

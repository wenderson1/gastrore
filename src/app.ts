import 'reflect-metadata';
import express, { NextFunction,Request, Response } from 'express';
import './database';//não é necessario especificar que é um index
import { router } from './routes';


const app = express();



app.use(express.json());
app.use(router);

export { app };
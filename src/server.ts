import 'reflect-metadata';
import express, { NextFunction,Request, Response } from 'express';
import './database';//não é necessario especificar que é um index
import { router } from './routes';


const app = express();



app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running"));

/***
 * Gastrore é uma api feita em Node onde os usuários poderão cadastrar suas receitas e consultar e interagir com as receitas de outros por Likes/Dislikes ou comentários
 */
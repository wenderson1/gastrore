import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import {CommentaryRepository} from '../repositories/CommentaryRepository'

class CommentaryController{

    async create(request: Request, response: Response) {
       
    }
}


export { CommentaryController };
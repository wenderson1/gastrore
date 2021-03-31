import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import {CommentaryRepository} from '../repositories/CommentaryRepository'

class CommentaryController{

    async create(request: Request, response: Response) {
        const { comment, user } = request.body;

        const commentaryRepository = getCustomRepository(CommentaryRepository)

        const commentaryAlreadyExists = await commentaryRepository.findOne({
            user
        })

        if (commentaryAlreadyExists) {
            return response.status(400).json(
                {
                    error:"This user already comment"
                }
            )
        }

        const commentary = commentaryRepository.create({
            comment,user
        });
        
        await commentaryRepository.save(commentary);

        return response.json(commentary);
    }
}


export { CommentaryController };
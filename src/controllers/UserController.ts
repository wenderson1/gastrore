import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UsersRepository';

class UserController{

    async create(request:Request, response:Response) {
       
        const {nickname, email, password} = request.body;
        
        const usersRepository = getCustomRepository(UserRepository);

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            return response.status(400).json({
                error:"User already exists!"
            })
        }

        const user = usersRepository.create({
            nickname,email,password
        })
        
        await usersRepository.save(user);

        return response.json(user);
    }

    async getAll(request: Request, response: Response) {
        const usersRepository = getCustomRepository(UserRepository);

        const all = await usersRepository.find();

        return response.json(all);
    }
}

export { UserController };

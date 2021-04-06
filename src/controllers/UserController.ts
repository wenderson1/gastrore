import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UsersRepository';
import bcryptjs, { hash } from 'bcryptjs';



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


    const NAMESPACE = "User";

    const validateToken = (request: Request, response: Response, next: NextFunction) => {
        logging.info(NAMESPACE, "Token Validated, user authorized")
        
        return response.status(200).json({
            message:"Authorized"
        })
    };

    const register = (request: Request, response: Response, next: NextFunction) => {
        let { email, password } = request.body;

        bcryptjs.hash(password, 10, (hashError, hash) => {
            if (hashError)
            {
                return response.status(500).json({
                    message: hashError.message,
                    error:hashError
                })
            }
        })
    };

    const login = (request: Request, response: Response, next: NextFunction) => {
        
    };

    const getAllusers = (request: Request, response: Response, next: NextFunction) => {
        
    };



}

export { UserController };

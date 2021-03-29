import { EntityRepository, Repository } from "typeorm";
import { Comentary } from "../models/Commentary";

@EntityRepository(Comentary)
class CommentaryRepository extends Repository<Comentary>{

}

export { CommentaryRepository };
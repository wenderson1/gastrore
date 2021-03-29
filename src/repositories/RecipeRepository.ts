
import { EntityRepository, Repository } from "typeorm";
import { Recipe } from "../models/Recipe";

@EntityRepository(Recipe)
class CommentaryRepository extends Repository<Recipe>{
}

export { CommentaryRepository };

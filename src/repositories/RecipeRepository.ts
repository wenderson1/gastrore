
import { EntityRepository, Repository } from "typeorm";
import { Recipe } from "../models/Recipe";

@EntityRepository(Recipe)
class RecipeRepository extends Repository<Recipe>{
}

export { RecipeRepository };

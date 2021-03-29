import { User } from "./User";
import { v4 as uuid} from 'uuid';
import { Comentary } from "./Commentary";

//@Entity
class Recipe{

   // @PrimaryColumns
    readonly id: string;

    // @Columns
    title:string

    // @Columns
    ingredients: string
    
  //   @Columns
    preparation_mode: string

  //   @Columns
    like:number;

   //  @Columns
    dislike: number;
    
    //@CreateDateColumn()
    created_at: Date;

  //   @ManyToOne(() => User)
  //   @JoinColumn({name:"user_id"})
    user: User; //chave fk

    //   @ManyToOne(() => Comentary)
  //   @JoinColumn({name:"commentary_id"})
    commentary: Comentary; //chave fk

    constructor() {
        if (!this.id)
            this.id = uuid();
    }

}

export { Recipe };
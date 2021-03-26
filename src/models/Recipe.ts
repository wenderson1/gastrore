/*import { User } from "./User";

@Entity
class Recipe{

    @PrimaryColumns
    readonly id: string;

    @Columns
    title:string

    @Columns
    ingredients: string
    
    @Columns
    preparation_mode: string

    @Columns
    like:number;

    @Columns
    dislike:number;

    @ManyToOne(() => User)
    @JoinColumn({name:"user_id"})
    user: User; //chave fk

    constructor() {
        if (!this.id)
            this.id = uuid();
    }

}

export { Recipe };*/
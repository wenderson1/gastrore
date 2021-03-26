/*import { Recipe } from "./Recipe";

class Comentary{
    @PrimaryColumn()
    readonly id: string;

    @Column
    comment: string;

    @Column
    like: number;

    @Column
    dislike: number;

    @ManyToOne(() => User)
    @JoinColumn({name:"user_id"})
    user: User; //chave fk

    @ManyToOne(() => Recipe)
    @JoinColumn({name:"recipe_id"})
    recipe: Recipe; //chave fk

    constructor(){
        if (!this.id)
            this.id = uuid();
    }
}

export { Comentary };*/
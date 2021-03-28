import { v4 as uuid} from 'uuid';
import { User } from './User';

class Comentary{
   // @PrimaryColumn()
    readonly id: string;

    //@Column
    comment: string;

   // @Column
    like: number;

    //@Column
    dislike: number;

   // @ManyToOne(() => User)
   //@JoinColumn({name:"user_id"})
    user: User; //chave fk

    //@CreateDateColumn()
    created_at: Date;



    constructor(){
        if (!this.id)
            this.id = uuid();
    }
}

export { Comentary };
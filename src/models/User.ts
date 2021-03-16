

@Entity
class User{

    @PrimaryColumn()
    readonly id: string;

    @Column
    nickname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    link_photo: string;

    constructor(){
        if (!this.id)
            this.id = uuid();
    }
}



export { User };

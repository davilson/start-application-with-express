import { v4 as uuid } from 'uuid';

export class User {
    public readonly id: string = "";
    public firstname: string = "";
    public surname: string = "";
    public email: string = "";
    public password: string = "";

    constructor(user: Omit<User, 'id'>, id?: string) {
        Object.assign(this, user);
        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
        }
    }
}

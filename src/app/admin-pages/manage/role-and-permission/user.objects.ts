export class UserObject {
    
    public id: number;
    public name: string;
    public email: string;
    public roles: string;
    public approval: boolean;
    public image_file: any;
    public image_file_name: string;
    public created_at: string;
    public updated_at: string;

    constructor() {
        this.id = null;
        this.name = '';
        this.email = '';
        this.roles = '';
        this.image_file = null;
        this.approval= false;   
    }
}
export class NewsObject {

    public id: number;
    public title: string;
    public content: string;
    public video_url: string;
    public approval: boolean;
    public image_file: any;
    public image_file_name: string;
    public created_at: string;
    public updated_at: string;

    constructor() {
        this.id = null;
        this.title = '';
        this.content = '';
        this.video_url = '';
        this.image_file = null;
        this.approval= false;   
    }
}
export class UserObject {

    public id: number;
    public email: string;
    public name: string;
    public role: string;
    public approval: boolean;
    public image_file: any;
    public image_file_name: string;
    public created_at: string;
    public updated_at: string;

    constructor() {
        this.id = null;
        this.email = '';
        this.name = '';
        this.role = '';
        this.image_file = null;
        this.approval= false;   
    }
}
export class MainDashboard {
    public all_system_users: number;
    public all_mobile_user: number;
    public all_system_admin: number;
    constructor() {
        this.all_system_users = 0;
        this.all_mobile_user = 0;
        this.all_system_admin = 0;
    }
}
export class PostDashboard {
    public published_posts: number;
    public not_published_posts: number;
    public feeds_likes: number;
    public feeds_comments: number;
    constructor() {
        this.published_posts = 0;
        this.not_published_posts = 0;
        this.feeds_likes = 0;
        this.feeds_comments = 0;
    }
}
export class DashboardListData {
    public start_date: string;
    public users_count: number[];
    public member_date: string[];
    constructor() {
        this.start_date = '';
        this.users_count = [];
        this.member_date = [];
    }
}
export class ChartObject {
    public labels: string[];
    public series: any[];
    public plugins: any[];
    constructor() {
        this.labels = [];
        this.series = [];
        this.plugins = [];
    }
}
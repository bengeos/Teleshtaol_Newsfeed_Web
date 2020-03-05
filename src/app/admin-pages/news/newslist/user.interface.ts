export interface User{ 
    email:string;
    name:string;
    id:number;
}
export interface Role{
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}
export interface News{
    id:number;
    title:string;
    content:number;
    video_url:string;
    image_url:string;
    created_at:string;
    updated_at:string;
}
export interface User{
    id:number;
    email:string;
    name:string;
    role:string;
    image_url:string;
    created_at:string;
    updated_at:string;
}
export interface MainDashboard{
    id:number;
    all_system_user:number;
    all_mobile_user:number;
    all_system_users:number;
}
export interface PostDashboard{
    id:number;
    published_posts:string;
    not_published_posts:number;
    feeds_likes:string;
    feeds_comments:string;
}



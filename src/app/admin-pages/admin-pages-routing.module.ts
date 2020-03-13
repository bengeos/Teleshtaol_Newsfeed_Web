import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEngagementComponent } from './manage/manage-engagement/manage-engagement.component';
import { RoleAndPermissionComponent } from './manage/role-and-permission/role-and-permission.component';
import { SendnotificationComponent } from './notify/sendnotification/sendnotification.component';
import { NewslistComponent } from './news/newslist/newslist.component';
import { NewspostComponent } from './news/newspost/newspost.component';
import { RoleDetailComponent } from './manage/role-detail/role-detail.component';
import { RoleGuard } from '../guards/role.guard';
import { RightGuard } from '../guards/right.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApprovedNewsComponent } from './news/approved-news/approved-news.component';
import { DispprovedNewsComponent } from './news/dispproved-news/dispproved-news.component';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [{
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: 'newspost'
      },
  {
  path: 'newspost', component: NewspostComponent,
  data: {
    title: 'News Post'
  }
},
{
  path: 'newslist', component: NewslistComponent,
  canActivate:[RightGuard],
  data: {
    title: 'News List'
  }
},
{
  path: 'approvednews', component: ApprovedNewsComponent,
  //canActivate:[RightGuard],
  data: {
    title: 'News List'
  }
},
{
  path: 'disprovednews', component: DispprovedNewsComponent,
  //canActivate:[RightGuard],
  data: {
    title: 'News List'
  }
},
{
  path: 'sendnotification', component: SendnotificationComponent,
  data: {
    title: 'Send Notification'
  }
},
{
  path: 'manageengagement', component: ManageEngagementComponent,
  data: {
    title: 'Manage Engagement'
  }
},
{
  path: 'roleandpermission', component: RoleAndPermissionComponent,
  canActivate:[RoleGuard],
  data: {
    title: 'Users Role Management'
  }
},
{
  path: 'roledetail', component: RoleDetailComponent,
  canActivate:[RoleGuard],
  data: {
    title: 'Users Role Management'
  }
},
{
  path: 'dashboard', component: DashboardComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'User Role Detail'
  }
},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }

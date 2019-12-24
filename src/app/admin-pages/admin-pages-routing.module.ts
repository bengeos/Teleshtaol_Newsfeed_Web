import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEngagementComponent } from './manage/manage-engagement/manage-engagement.component';
import { RoleAndPermissionComponent } from './manage/role-and-permission/role-and-permission.component';
import { SendnotificationComponent } from './notify/sendnotification/sendnotification.component';
import { NewslistComponent } from './news/newslist/newslist.component';
import { NewspostComponent } from './news/newspost/newspost.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
  {
  path: 'newspost', component: NewspostComponent,
  data: {
    title: 'News Post'
  }
},
{
  path: 'dashboard', component: DashboardComponent,
  data: {
    title: 'DashBoard'
  }
},
{
  path: 'newslist', component: NewslistComponent,
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
  data: {
    title: 'Send Notification'
  }
},

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }

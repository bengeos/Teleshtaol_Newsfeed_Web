import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEngagementComponent } from './manage/manage-engagement/manage-engagement.component';
import { NewspostComponent } from './news/newspost/newspost.component';
import { NewslistComponent } from './news/newslist/newslist.component';
import { RoleAndPermissionComponent } from './manage/role-and-permission/role-and-permission.component';
import { SendnotificationComponent } from './notify/sendnotification/sendnotification.component';


@NgModule({
  declarations: [DashboardComponent, ManageEngagementComponent, NewspostComponent, NewslistComponent, RoleAndPermissionComponent, SendnotificationComponent],
  imports: [
    CommonModule,
    AdminPagesRoutingModule
  ]
})
export class AdminPagesModule { }

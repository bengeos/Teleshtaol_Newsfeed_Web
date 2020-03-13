import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEngagementComponent } from './manage/manage-engagement/manage-engagement.component';
import { NewspostComponent } from './news/newspost/newspost.component';
import { NewslistComponent } from './news/newslist/newslist.component';
import { RoleAndPermissionComponent } from './manage/role-and-permission/role-and-permission.component';
import { SendnotificationComponent } from './notify/sendnotification/sendnotification.component';
import { FormsModule } from '@angular/forms';
import { RoleDetailComponent } from './manage/role-detail/role-detail.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
//import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
//import { TabsModule } from 'ngx-bootstrap/tabs/public_api';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown/public_api';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppBreadcrumbModule } from '@coreui/angular';
import { ApprovedNewsComponent } from './news/approved-news/approved-news.component';
import { DispprovedNewsComponent } from './news/dispproved-news/dispproved-news.component';
import { Component } from '@angular/core';
//import { NewspostdialogComponent } from './Roger/newspostdialog/newspostdialog.component';
import { NewsListDialogComponent } from './news/news-list-dialog/news-list-dialog.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [ ManageEngagementComponent, NewspostComponent, NewslistComponent, RoleAndPermissionComponent, SendnotificationComponent,DashboardComponent, RoleDetailComponent, ApprovedNewsComponent, DispprovedNewsComponent, NewsListDialogComponent],
  entryComponents: [NewsListDialogComponent],
  imports: [
    CommonModule,    
    AdminPagesRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    
    ChartsModule,
    //TabsModule.forRoot(),
    //BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    AppBreadcrumbModule.forRoot(),
    HttpModule,
    CommonModule,
    HttpClientModule

  ]
})
export class AdminPagesModule { }

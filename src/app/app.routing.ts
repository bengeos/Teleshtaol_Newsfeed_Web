import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

import { AuthlayoutComponent } from './containers/authlayout/authlayout.component';
import { AuthGuard } from './guards/auth.guard';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
{
  path: '',
  component: AuthlayoutComponent,
  children: [{
      path: 'auth',
      data: {    
        title: 'Auth'
      },
      loadChildren: () => import('./auth-pages/auth-pages.module').then(m => m.AuthPagesModule),
      
  }],
},
{
  path: '',
  component: DefaultLayoutComponent,
  canActivate:[AuthGuard],  
  children: [{
      path: 'admin',
      data: {    
        title: 'Admin'
      },
      loadChildren: () => import('./admin-pages/admin-pages.module').then(m => m.AdminPagesModule),
      
  }],
},

{
  path: 'login',
  component: LoginComponent,
  data: {
    title: 'Login Page'
  }
},
{
path: '',
component: DefaultLayoutComponent,
data: {
  title: 'Home'
},
children: [
  {
    path: 'base',
    loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
  },
  {
    path: 'dashboard',
    canActivate:[AuthGuard],
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path: 'theme',
    loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
  },
  {
    path: 'widgets',
    loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
  },
  {
    path: 'newspost',
    loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
  },
]
},
{ path: '**', component: P404Component }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

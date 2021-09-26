import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {  
      path: '',
      redirectTo: 'home'
    },
{
path: 'home', component: HomeComponent,
data: {
  title: 'home'
}
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPagesRoutingModule { }

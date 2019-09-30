import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: LayoutComponent, children: [
      {
        path: '', component: HomeComponent
      }
    ]
  },
  { path: 'contact', redirectTo: '/contact/list', pathMatch: 'full' },
  { path: 'contact', component: LayoutComponent, loadChildren: './contact-info/contact-info.module#ContactInfoModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

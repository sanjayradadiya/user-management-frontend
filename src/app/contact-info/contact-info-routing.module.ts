import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Routes = [
  { path: 'list', component: ContactListComponent },
  { path: 'add', component: ContactAddComponent },
  { path: 'view/:id', component: ContactViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactInfoRoutingModule { }

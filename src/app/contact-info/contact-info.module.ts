import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap/alert';

import { ContactInfoRoutingModule } from './contact-info-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [ContactListComponent, ContactAddComponent, ContactViewComponent],
  imports: [
    CommonModule,
    ContactInfoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot()
  ]
})
export class ContactInfoModule { }

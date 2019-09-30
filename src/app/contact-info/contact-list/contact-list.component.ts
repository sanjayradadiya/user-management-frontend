import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public contactList: Contact[] = [];
  public isLoading: boolean = false;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.loadContactList();
  }

  /**
   * Load contact from backend and display on table
   */
  public loadContactList() {
    this.contactList = [];
    this.isLoading = true;
    this.contactService.getContactList().subscribe(contacts => {
      this.isLoading = false;
      this.contactList = contacts;
    })
  }

}

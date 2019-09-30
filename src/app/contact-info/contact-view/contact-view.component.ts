import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {

  public contact : Contact;
  public isLoading : boolean = false;

  constructor(
    private router: ActivatedRoute,
    private contactService : ContactService
  ) { }

  ngOnInit() {
    const contactId = this.router.snapshot.params["id"];
    this.getContactById(contactId)
  }

  /**
   * Get contact information by id and display on view
   * @param id contact id
   */
  getContactById(id : Number) {
    this.isLoading = true;
    this.contactService.getContactInfo(id).subscribe(info => {
      this.contact = info;
      this.isLoading = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public contactAddForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    gender: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required])
  });
  public isSubmited: boolean = false;
  public isLoading: boolean = false;
  public isSuccess : boolean = false;
  public isError : boolean = false;
  public message: string = '';

  constructor(
    private route: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  get f() { return this.contactAddForm.controls; }

  /**
   * validate form and fire the post request to contact api
   */
  public onSubmit() {
    this.isSubmited = true

    if (!this.contactAddForm.valid) {
      return;
    }

    this.isLoading = true;
    this.isError = false;
    this.isSuccess = false;

    const { name, dob, email, gender, budget } = this.contactAddForm.value;

    this.contactService.addContact({
      name,
      dob,
      email,
      gender,
      budget
    }).subscribe(res => {
      this.isSubmited = false;
      this.isLoading = false;
      this.isSuccess = true;
      setTimeout(() => {
        this.route.navigate(['/contact/list'])
      }, 1500);
    }, (err) => {
      console.error(err);
      this.isError = true;
      this.isLoading = false;
    });
  }

}

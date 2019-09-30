import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Contact } from '../models/contact';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private API_ENDPOINT: string = environment.apiEndpoint;

  constructor(private http: Http) { }

  /**
   * Post new contact information to database
   * @param contactInfo contact information object
   */
  public addContact(contactInfo: Contact) {
    return this.http.post(`${this.API_ENDPOINT}/contact`, contactInfo);
  }

  /**
   * Get all contact from database 
   */
  public getContactList() {
    return this.http.get(`${this.API_ENDPOINT}/contact`).pipe(
      map((response: any) => { return JSON.parse(response._body) as Contact[] })
    );
  }

  /**
   * Get specific contact information by id
   * @param id contact id
   */
  public getContactInfo(id: Number) {
    return this.http.get(`${this.API_ENDPOINT}/contact?id=${id}`).pipe(
      map((response: any) => { return JSON.parse(response._body)[0] as Contact })
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyContacts } from '../models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //all contact - to get all contact data from api
  allcontacts(){
    //http request to get all contacts
    return this.http.get('http://localhost:3000/contacts')
  }
  //api to get a purticular contact
  viewcontact(contactId:any){
    return this.http.get('http://localhost:3000/contacts/'+contactId)
  }

  //api call for getting a particular contact group info
  viewcontactgroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  //api call for getting all group
  allGroup(){
    return this.http.get('http://localhost:3000/groups')
  }

  //for add new contact details
  addContact(contact:any){
    return this.http.post('http://localhost:3000/contacts',contact)
  }
  
  //api call to delete a contact
  deleteContact(contactId:any){
    return this.http.delete('http://localhost:3000/contacts/'+contactId)
  }

  //api call to update a existing contact
  updateContact(contactId:string,contactBody:any){
    return this.http.put('http://localhost:3000/contacts/'+contactId ,contactBody)
  }

}

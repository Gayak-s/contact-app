import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MyContacts } from '../models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  allGroup:any
  contact:MyContacts = {}
  constructor(private api:ApiService , private addContactRouter:Router){
    this.contact.groupId = "Select a Group"
  }
  ngOnInit(): void {
   this.api.allGroup().subscribe((result:any)=>{
    console.log(result);
    this.allGroup = result
   })
  }
  //addcontact
  addContact(contact:any){
      this.api.addContact(contact).subscribe((data:any)=>{
        alert('New Contact Registered Succsessfully')
        //redirect to all contact page
        this.addContactRouter.navigateByUrl('')
      })
  }
}

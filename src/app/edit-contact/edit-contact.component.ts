import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContacts } from '../models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactId: any
  contact:MyContacts ={}
  allGroup:any

  constructor(private editcontactActivatedRoute: ActivatedRoute , private api:ApiService ,private editContactRouter:Router) {
  }

  ngOnInit(): void {
    //to get path parameter from url
    this.editcontactActivatedRoute.params.subscribe((data: any) => {
      this.contactId = data.id
    })
      //to get details of particular contact
      this.api.viewcontact(this.contactId).subscribe((data:any)=>{
      this.contact = data
    })
    
    //to get all groups from api
    this.api.allGroup().subscribe((data:any)=>{
    this.allGroup = data
    console.log(this.allGroup);
    
    })
  }
  //update contact
  updateContact(contact:MyContacts){
    //to Update contact to api
    this.api.updateContact(this.contactId,contact).subscribe((data:any)=>{
      alert('contact Updated successfully')
      this.editContactRouter.navigateByUrl('')
    })
  }

}

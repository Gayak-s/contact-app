import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId: string = ''
  contact: any
  groupname: any

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    //to get path parameter from url
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);
      this.contactId = data.id
      console.log(this.contactId);
    })
    //to get details of particular contact
    this.api.viewcontact(this.contactId).subscribe((result: any) => {
      console.log(result);
      this.contact = result
      //get groupid from contact
      let groupId = this.contact.groupId
      console.log(groupId);
      //api call for group details
      this.api.viewcontactgroupName(groupId).subscribe((result: any) => {
        console.log(result);
        this.groupname = result.name
        
      })
    })

  }


}

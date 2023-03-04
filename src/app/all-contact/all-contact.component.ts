import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
  //To hold all contacts data from api
  allcontacts:any
  searchContact:string =''
  
  constructor(private api:ApiService){
  }

  ngOnInit(): void {
    this.getAllContact()
  }

  getAllContact(){
    //api call to get data
    this.api.allcontacts().subscribe((result:any)=>{
      console.log(result);
      this.allcontacts = result
    })
  }

  //delete Contact
  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((data:any)=>{
      window.location.reload()
      
    })
  }

}

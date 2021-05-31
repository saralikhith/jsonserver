import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  iddata

  constructor(private ac:ActivatedRoute, private hc:DataService) { }

  ngOnInit(): void {
   let id=this.ac.snapshot.params.id;
   

   //to read params from url
   this.hc.toGetId(id).subscribe(
     data=>{
      this.iddata=data;
      console.log(this.iddata)
     },
     err=>{
       console.log("the error at userdatails,err")
     }
   )

  }

}

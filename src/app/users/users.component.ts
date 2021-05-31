import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usobj:DataService, private router:Router) { }

  data:any[]=[]

  ngOnInit(): void {
    this.usobj.toGetData().subscribe(
      userdata=>{
         this.data=userdata;
      },
      err=>{
        console.log("the error is ",err)
      }
    )
  }

  toSelectId(id){
          this.router.navigateByUrl('users/'+id)
  }

}

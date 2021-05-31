import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  toGetData():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users')
  }


  toGetId(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users/'+id)
  }
  
  }


import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public createUser(fullName:any,email:any,password:any):Observable<any>{

    let id=1;
    if (email=='doc@gmail.com'){
      id=2;
    }
    return this.http.post('localhost:8000/api/v1/users/visitor/signup',{
      id:id,
      fullName:fullName,
      email:email,
      password:password
    });
  }
}

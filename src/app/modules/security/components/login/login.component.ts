import { Component } from '@angular/core';
import {AuthService} from "../../../share/services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService:AuthService, private router:Router) {
  }

  form= new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',Validators.required)
  });

  login() {
    // token
  }
}

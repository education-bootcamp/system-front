import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    form= new FormGroup({
      fullName:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',Validators.required)
    });

  signup() {
    // impl
  }
}

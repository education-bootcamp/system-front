import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss']
})
export class NewDoctorComponent implements OnInit{
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    // enable route guard
  }

}

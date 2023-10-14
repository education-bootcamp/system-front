import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-verification',
  templateUrl: './admin-verification.component.html',
  styleUrls: ['./admin-verification.component.scss']
})
export class AdminVerificationComponent implements OnInit{
  ngOnInit(): void {
    this.verify();
  }

  private verify() {
    // code verify-> get the token -> verify
  }

}

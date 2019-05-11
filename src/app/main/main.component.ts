import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  newcomponet="Enter in new component crete"
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  login() {
    console.log("adsad");
  }

}

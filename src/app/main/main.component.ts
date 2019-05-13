import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  newcomponet="Enter in new component crete"
  constructor() { }

  ngOnInit() {
  }
  login() {
    console.log("adsad");
  }

}

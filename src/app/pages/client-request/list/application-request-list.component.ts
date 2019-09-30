import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-request-list',
  templateUrl: './application-request-list.component.html',
  styleUrls: ['./application-request-list.component.css']
})
export class ApplicationRequestListComponent implements OnInit {
  clientRequests: [];
  constructor() {}

  ngOnInit() {}
}

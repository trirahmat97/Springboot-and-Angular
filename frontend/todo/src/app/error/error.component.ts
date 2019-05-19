import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMassage = 'An Error Occured! Contact Support at TRA -- *** ---';

  constructor() { }

  ngOnInit() {
  }

}

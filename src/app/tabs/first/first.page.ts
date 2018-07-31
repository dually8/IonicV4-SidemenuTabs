import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(public router: Router) {
    console.log('first page router config');
    console.log(this.router.config);
  }

  ngOnInit() {
  }

}

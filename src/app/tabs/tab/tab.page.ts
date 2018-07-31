import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage {

  constructor(
    public router: Router,
  ) {
    console.log('Tab page router config');
    console.log(this.router.config);
  }

}

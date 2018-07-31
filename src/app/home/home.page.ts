import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
  ) {

  }

  goToTabs() {
    this.router.navigate(['tabs']);
  }
}

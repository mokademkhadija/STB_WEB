import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(
    private menuCtrl: MenuController,
    private router: Router,

  ) {
    this.menuCtrl.enable(true);
  }

  openMenu() {
    this.menuCtrl.open();
  }
  
}

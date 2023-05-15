import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/Models/User.model';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.page.html',
  styleUrls: ['./list-client.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})


export class ListClientPage implements OnInit {
  red = "color:'red'"
  listUser: any=[]
  isConten: any;

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private httpClinet: HttpClient
  ) {
    this.menuCtrl.enable(true);
  }

  ngOnInit(): void {
    this.isConten = this.router.url.indexOf("list-client-coten")
    console.log('isConten', this.isConten)
    this.httpClinet.get("http://localhost:8080/user/").subscribe((res: any) => {

      console.log(this.listUser)
    })
  }

  ionViewWillEnter() {
    this.listUser=[]
    this.httpClinet.get("http://localhost:8080/user/").subscribe((res: any) => {

      if (this.isConten == 1)
        for (const item of res) {
          if (item.solde < 0) {
            this.listUser.push(item)
          }
          console.log(item);
        }
      if (this.isConten != 1)
        this.listUser = res

      console.log(this.listUser)
    })
  }

  openMenu() {
    this.menuCtrl.open();
  }

  openDetails(id: any) {
    this.router.navigate(['/details-client/' + id]);
  }

  ajoutClient() {
    this.router.navigate(['/ajout-client']);

  }


}

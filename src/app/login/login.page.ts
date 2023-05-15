import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, MenuController, ToastController} from '@ionic/angular';
import {User} from 'src/app/Models/User.model';
import {Router} from '@angular/router';
import {AppComponent} from "../app.component";
import {AuthGuard} from "../Services/Auth/auth.guard";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule ],
  providers:[]
})
export class LoginPage implements OnInit {


  user: User = new User();

  constructor(private menuCtrl: MenuController,
              private authGuard: AuthGuard,
              public toastController: ToastController,
              ) {
  }


  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async presentToastError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: 'danger'
    });
    toast.present();
  }

  connecter() {
    let user ={
      email:this.user.email,
      password:this.user.password
    }
    this.authGuard.authentificate(user)
 
  }

}

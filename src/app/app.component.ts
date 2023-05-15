import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IonicModule, MenuController} from '@ionic/angular';
import {User} from './Models/User.model';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AuthGuard } from './Services/Auth/auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule ],
    providers:[AuthGuard]

})
export class AppComponent implements OnInit {

  menuList: any;
  user: User = new User();

  constructor(
    public router: Router,
    private menuCtrl: MenuController,
    private httpClinet: HttpClient,

    //private authGuard:AuthGuard

    ) {



    console.log(localStorage.getItem('user'))
    if(localStorage.getItem('user')!=null){

      this.checkData()
    }else {
      this.logout()
    }

  }

  logout() {
    localStorage.clear();
    this.menuCtrl.close();
    this.menuCtrl.enable(false);
    this.router.navigate(['/login']);
  }


  routerGo(path: any) {
    this.menuCtrl.close();
    this.router.navigate([path])

  }

  setAdmin() {
    this.menuList = [
      {
        title: 'Liste des clients',
        path: '/list-client',
        icon: 'people-outline'
      },
      {
        title: 'Ajouter une carte',
        path: '/ajout-card',
        icon: 'people-outline'
      },
      {
        title: 'Liste des cartes',
        path: '/liste-cartes',
        icon: 'people-outline'
      },
      {
        title: 'Liste des reclamations',
        path: '/liste-reclamation',
        icon: 'people-outline'
      },
      {
        title: 'Liste clients contentieux',
        path: '/list-client-coten',
        icon: 'people-outline'
      },
      {
        title: 'Déconnecter',
        path: '/login',
        icon: 'log-out-outline'
      },

    ]
  }

  setNormal() {
    this.menuList = [
      {
        title: 'Accueil',
        path: '/home',
        icon: 'people-outline'
      },
      {
        title: 'Profile',
        path: '/profile',
        icon: 'people-outline'
      },
      {
        title: 'Liste des transactions',
        path: '/liste-transaction',
        icon: 'people-outline'
      },
      {
        title: 'Transfer',
        path: '/ajout-transaction',
        icon: 'people-outline'
      },
      {
        title: 'Reclamation',
        path: '/ajout-reclamation',
        icon: 'people-outline'
      },
      {
        title: 'Parametre',
        path: '/settings',
        icon: 'people-outline'
      },
      {
        title: 'Déconnecter',
        path: '/login',
        icon: 'log-out-outline'
      },

    ]
  }

  deRepeat(): void {
    setInterval(() => {
      console.log('aa')
    },  1000);
  }

  ngOnInit(): void {
    this.deRepeat()
  }
  checkData(){

    this.httpClinet.get("http://localhost:8080/user/"+ localStorage.getItem('user')).subscribe((res:any)=>{
      console.log(res)
      this.user=res;
      if(res.role=='admin'){
        this.setAdmin()
      }
      else
      this.setNormal()

    })

    // this.authGuard.getById(localStorage.getItem('user')).subscribe((res)=>{
    //   console.log(res)
    // })
  }
}

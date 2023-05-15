import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule, MenuController, ToastController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.page.html',
  styleUrls: ['./ajout-reclamation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AjoutReclamationPage implements OnInit {
  transaction={
    commantaire:null,
    idPersonne:null,
    status:false
  }
  ;
  constructor(
    private menuCtrl: MenuController,
    private httpClinet: HttpClient,
    private router: Router,
    public toastController: ToastController,

  ) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuCtrl.open();
  }


  send() {
    console.log(    localStorage.getItem('user'))
    this.httpClinet.get("http://localhost:8080/user/"+ localStorage.getItem('user')).subscribe(async (res: any) => {
      this.transaction.idPersonne = res.id

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        this.httpClinet.post("http://localhost:8080/reclamation/addReclamation", this.transaction).subscribe(async (res:any) => {
          console.log(res)
          if (res.message!=null){
            const toast = await this.toastController.create({
              message:'Envoyer avec succes',
              duration: 1500,
              position: 'bottom'
            });

            await toast.present();
          }else {
            this.router.navigate(['/home']);
          }


        })

    })


  }
}

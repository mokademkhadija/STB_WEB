import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule, MenuController, ToastController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-transaction',
  templateUrl: './ajout-transaction.page.html',
  styleUrls: ['./ajout-transaction.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AjoutTransactionPage implements OnInit {
  transaction={
    nom:null,
    montant:null,
    idSend:null,
    compte_recev:null,
    commentaire:null,
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
      this.transaction.idSend = res.id
      console.log(this.transaction);
      console.log(String(this.transaction.compte_recev).length);
      if (String(this.transaction.compte_recev).length != 16) {

        const toast = await this.toastController.create({
          message: 'Le numéro de compte est invalide le numéro doit être composé de 16 caractères.',
          duration: 1500,
          position: 'bottom'
        });

        await toast.present();
        this.transaction.compte_recev = null;
      }
      else {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        this.httpClinet.post("http://localhost:8080/Transaction/addTransaction", this.transaction).subscribe(async (res:any) => {
          console.log(res)
          if (res.message!=null){
            const toast = await this.toastController.create({
              message: res.message,
              duration: 1500,
              position: 'bottom'
            });

            await toast.present();
          }else {
         this.router.navigate(['/liste-transaction']);
          }


        })
      }
    })


  }
}

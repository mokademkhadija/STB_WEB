import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AlertController, IonicModule, MenuController} from '@ionic/angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.page.html',
  styleUrls: ['./liste-reclamation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListeReclamationPage {
  listTransfer: any=[];
  constructor(
    private menuCtrl: MenuController,
    private alertController: AlertController,
    private httpClinet: HttpClient,
  ) { }

  ionViewWillEnter() {
    this.listTransfer=[]
    this.httpClinet.get("http://localhost:8080/reclamation/").subscribe((res:any)=>{
      this.listTransfer = res;
      console.log(localStorage.getItem('user'))
    })
  }

  openMenu() {
    this.menuCtrl.open();
  }


  async deleteElement($event: any) {
    console.log($event)
    const alert = await this.alertController.create({
      header: "Confirmation de l'opération",
      subHeader: "Voulez-vous confirmer cette opération ?",
      buttons: [
        {
          text: "Approve",
          role:  "Approve",
          handler: () => {
          },
        },
        {
          text: "cancel",
          role: 'cancel',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();
    await alert.onDidDismiss().then((res)=>{
      console.log(res)
      if(res.role=="Approve"){
        this.httpClinet.delete("http://localhost:8080/reclamation/delete/"+  $event.id ).subscribe((res:any)=>{
          this.ionViewWillEnter()
        })
      }

    })

  }
}

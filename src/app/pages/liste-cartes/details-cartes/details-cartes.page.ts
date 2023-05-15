import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-cartes',
  templateUrl: './details-cartes.page.html',
  styleUrls: ['./details-cartes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsCartesPage implements OnInit {

  id:any;
  user:any;
  constructor(
    private httpClinet:HttpClient,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private alertController:AlertController
  ) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadData()
  }
  ionViewWillEnter(){
    this.loadData()
  }

  userCompte: any;
  listUser: any;
  loadData(){
    this.user = null;

    this.httpClinet.get("http://localhost:8080/user/").subscribe((res: any) => {
      this.listUser = res
      this.httpClinet.get("http://localhost:8080/carte/"+  this.id ).subscribe((res:any)=>{
        this.user=res;
        for (const item of this.listUser) {
          if (item['id'] == this.user.idCompte) {
            this.userCompte = item;
            break;
          }
        }
      })
    })
  }
  Modifier(){
    this.router.navigate(['/update-card/'+this.id]);

  }
  async Supprimer(){
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
        this.httpClinet.delete("http://localhost:8080/carte/delete/"+  this.id ).subscribe((res:any)=>{
          this.router.navigate(['/liste-cartes']);
        })
      }

    })

  }

  active(status: boolean) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    this.httpClinet.post("http://localhost:8080/carte/updateValidity/"+this.id, status,{headers}).subscribe((res:any)=>{
      this.loadData();

    })
  }
}

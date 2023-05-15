import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.page.html',
  styleUrls: ['./details-client.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsClientPage implements OnInit {
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

  loadData(){
    this.httpClinet.get("http://localhost:8080/user/"+  this.id ).subscribe((res:any)=>{
    this.user=res;
    })
  }
  Modifier(){
    this.router.navigate(['/modif-client/'+this.id]);

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
            this.httpClinet.delete("http://localhost:8080/user/delete/"+  this.id ).subscribe((res:any)=>{
              this.router.navigate(['/list-client']);
    })
      }
  
     })  
     
  }
}

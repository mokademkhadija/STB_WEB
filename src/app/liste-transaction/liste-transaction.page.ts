import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule, MenuController} from '@ionic/angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-liste-transaction',
  templateUrl: './liste-transaction.page.html',
  styleUrls: ['./liste-transaction.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListeTransactionPage {
  listTransfer: any=[];
  constructor(
    private menuCtrl: MenuController,
    private httpClinet: HttpClient,
  ) { }

  ionViewWillEnter() {
    this.listTransfer=[]
    this.httpClinet.get("http://localhost:8080/Transaction/").subscribe((res:any)=>{
      for (const item of res) {
        if (item.idSend+'' == localStorage.getItem('user')+'') {
          this.listTransfer.push(item)
        }
      }
      console.log(localStorage.getItem('user'))
    })
  }

  openMenu() {
    this.menuCtrl.open();
  }



}

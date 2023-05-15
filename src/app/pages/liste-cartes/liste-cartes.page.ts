import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule, MenuController} from '@ionic/angular';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-liste-cartes',
  templateUrl: './liste-cartes.page.html',
  styleUrls: ['./liste-cartes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListeCartesPage implements OnInit {

  red="color:'red'"
  listUser:any=[{},{}]
  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private httpClinet:HttpClient

  ) {
    this.menuCtrl.enable(true);
  }
  ngOnInit(): void {
  }
  ionViewWillEnter(){
    this.httpClinet.get("http://localhost:8080/carte/").subscribe((res:any)=>{

      //this.listUser=res
      console.log(this.listUser)
    })
  }

  openMenu() {
    this.menuCtrl.open();
  }
  openDetails(id:any){
    this.router.navigate(['/details-cartes/'+id]);
  }


}

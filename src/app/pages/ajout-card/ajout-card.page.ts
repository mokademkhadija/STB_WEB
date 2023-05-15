import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, MenuController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../Models/User.model";
import {ActivatedRoute, Router} from "@angular/router";

declare var jQuery: any;

@Component({
  selector: 'app-ajout-card',
  templateUrl: './ajout-card.page.html',
  styleUrls: ['./ajout-card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AjoutCardPage implements OnInit {
  numer1: any
  numer2: any
  numer3: any
  numer4: any
  name: any
  month: any
  year: any
  user: any
  listUser: any;

  constructor(
    private menuCtrl: MenuController,
    private httpClinet: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  id: any;
  editMode = false;
  userCompte :any;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.loadData();
      this.editMode=true
    }

    this.getListClient()
  }

  openMenu() {
    this.menuCtrl.open();
  }

  saveCard() {
    // console.log(this.numer1)
    // console.log(this.numer2)
    // console.log(this.numer3)
    // console.log(this.numer4)
    // console.log(this.month)
    // console.log(this.year)
    // console.log(this.name)
    // console.log(this.persone.id)

    let date = new Date();
    date.setMonth(this.month)
    date.setFullYear(this.year,this.month)
    let obj ={
      idCompte:this.persone?.id,
      numero:this.numer1+''+this.numer2+''+this.numer3+''+this.numer4,
      solde:0,
      isValid:true,
      dateExpiration:date
    }
    console.log(obj)
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    this.httpClinet.post("http://localhost:8080/carte/addCarte", obj,{headers}).subscribe((res:any)=>{
      this.router.navigate(['/liste-cartes']);

    })

  }
  editCard() {
    // console.log(this.numer1)
    // console.log(this.numer2)
    // console.log(this.numer3)
    // console.log(this.numer4)
    // console.log(this.month)
    // console.log(this.year)
    // console.log(this.name)
    // console.log(this.persone.id)

    let date = new Date();
    date.setMonth(this.month)
    date.setFullYear(this.year,this.month)
    let obj ={
      idCompte:this.persone?.id,
      numero:this.numer1+''+this.numer2+''+this.numer3+''+this.numer4,
      solde:0,
      isValid:true,
      dateExpiration:date
    }
    console.log(obj)
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    this.httpClinet.post("http://localhost:8080/carte/edit/"+this.id, obj,{headers}).subscribe((res:any)=>{
      this.router.navigate(['/liste-cartes']);

    })

  }


  private getListClient() {
    this.httpClinet.get("http://localhost:8080/user/").subscribe((res: any) => {
      this.listUser = res
    })
  }

  persone: any;
  setUser($event: any) {
    console.log($event)

    for (const item of this.listUser) {
      let fullName = item['nom'] + ' ' + item['prenom']

      if ($event.target.value == fullName) {
        this.persone = item;
        break;
      }

    }
  }

  loadData(){

    this.httpClinet.get("http://localhost:8080/user/").subscribe((res: any) => {
      this.listUser = res
      this.httpClinet.get("http://localhost:8080/carte/"+  this.id ).subscribe((res:any)=>{
        this.user=res;
        for (const item of this.listUser) {
          if (item['id'] == this.user.idCompte) {
            this.userCompte = item;
            this.initForm(this.user, this.userCompte)
            break;
          }
        }
      })
    })
  }

  private initForm(user: any, useCon: any) {
    console.log(user)
    this.numer1=user.numero[0]+user.numero[1]+user.numero[2]+user.numero[3]
    this.numer2=user.numero[4]+user.numero[5]+user.numero[6]+user.numero[7]
    this.numer3=user.numero[8]+user.numero[9]+user.numero[10]+user.numero[11]
    this.numer4=user.numero[12]+user.numero[13]+user.numero[14]+user.numero[15]
    this.user = user.idCompte;
    this.month = new Date(user.dateExpiration).getMonth();
    this.year = new Date(user.dateExpiration).getFullYear();
    this.name=useCon.nom+' '+useCon.prenom


  }
}

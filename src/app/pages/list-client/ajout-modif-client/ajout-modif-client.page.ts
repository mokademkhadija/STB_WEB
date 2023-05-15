import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, MenuController } from '@ionic/angular';
import { User } from 'src/app/Models/User.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-modif-client',
  templateUrl: './ajout-modif-client.page.html',
  styleUrls: ['./ajout-modif-client.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AjoutModifClientPage implements OnInit {
  user: User = new User();
  id:any
  editMode:boolean=false;

  constructor(
    private menuCtrl: MenuController,
    private httpClinet:HttpClient,
    private router:Router,
    private activatedRoute: ActivatedRoute,

  ) {
    this.user.solde=0;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editMode=true
      this.initData()
    }

  }
  openMenu() {
    this.menuCtrl.open();
  }

  ajouter(){

    console.log(this.user)
    let obj = this.user
    obj['compteBancaireId']=0;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    this.httpClinet.post("http://localhost:8080/user/addUser", this.user,{headers}).subscribe((res:any)=>{
        this.router.navigate(['/details-client/'+res.id]);

    })
  }

  Modifier(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.httpClinet.post("http://localhost:8080/user/edit/"+this.user.id, this.user,{headers}).subscribe((res:any)=>{
      this.router.navigate(['/details-client/'+res.id]);

  })
  }
  initData(){
    this.httpClinet.get("http://localhost:8080/user/"+  this.id ).subscribe((res:any)=>{
      this.user=res;

      })
  }
}

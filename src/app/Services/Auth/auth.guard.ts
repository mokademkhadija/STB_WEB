import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AppComponent } from 'src/app/app.component';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class AuthGuard  {

  constructor(private router: Router,
              private httpClinet: HttpClient,
              private appComponent:AppComponent,
              public toastController: ToastController,
  ) {

  }
   authentificate(User: any) {
     this.httpClinet.post("http://localhost:8080/user/authentification", User).subscribe(async (res:any)=>{
      console.log(res)

       if (res.user == null) {

         const toast = await this.toastController.create({
           message: 'Verifier votre email ou mot de passe',
           duration: 1500,
           position: 'bottom'
         });

         await toast.present();

       }
      if(res.user.active==false ){
          const toast = await this.toastController.create({
            message: 'Votre compte est suspendu',
            duration: 1500,
            position: 'bottom'
          });

          await toast.present();
      }
      else {
        localStorage.setItem('user',res.user.id);
        if (res.user.role == 'admin') {

          this.appComponent.setAdmin()
          this.router.navigate(['/home']);

        }
        if (res.user.role == 'user') {
          this.appComponent.setNormal()
          this.router.navigate(['/home']);
        }

      }
       })
  }

  getById(id:any){
    return this.httpClinet.get("http://localhost:8080/user/", id)
  }

}

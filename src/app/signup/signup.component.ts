import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import decode from 'jwt-decode';
import { NgForm } from "@angular/forms";




@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(private service:RegserviceService,private router:Router,private state:AppComponent) { }

    model ={
      email :'',
      password:''
    };
    isAdmin:boolean;
    roll='';
    serverErrorMessages: string;
    message=false;
    // public alerts: Array<IAlert> = [];
    // private backup: Array<IAlert>;

    ngOnInit() {
      if(this.service.isLoggedIn())
      this.router.navigateByUrl('/admin');
      this.isAdmin=false;
    }
   p="";
  //  isKeeper=true;
   isKeeper='';
   
    
      onSubmit(form : NgForm){
        if(this.isKeeper) this.p="/keeper"
        this.service.login(form.value,this.p).subscribe(
          res => {
            this.service.setToken(res['token']);
            const token =this.service.getToken();
            const tokenPayload = decode(token);
            console.log(tokenPayload.role);
            console.log(res)
          if(tokenPayload.role == "admin"){
           this.router.navigateByUrl('/admin');
            // this.state.state=true;
        }
            else if(tokenPayload.role == "user"){
              this.router.navigateByUrl('/user-profile');
            // //   this.state.state=true;
            }
            else {
              this.router.navigateByUrl('/keeper')
            }
          }, 
          err => {console.log(err.error.message) 
            this.message=true;
            this.serverErrorMessages = err.error.message;
          }
        ); 
      }
      public closeAlert() {
      
    }
}

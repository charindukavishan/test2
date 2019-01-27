import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newpw',
  templateUrl: './newpw.component.html',
  styleUrls: ['./newpw.component.scss']
})
export class NewpwComponent implements OnInit {
  reg ={
    password :'',
    confirmPassword:'',
    email:''
  };
  userDetails='charindukavishan@gmail.com'
serverErrorMessages;
constructor(private service: RegserviceService, private router: Router,private route: ActivatedRoute) { }
private id: String;
private type:String
 private sub: any;
emai;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['token'];
    this.type=params['type'];
    });
    console.log(this.type)
    this.service.newpassword(this.id,this.type).subscribe( 
      res => {
       console.log(res);
        this.emai=res['user'];
        this.reg.email=this.emai.email;
        console.log(this.reg.email);

      },
      err => { 
        console.log(err);
        
      });
  }
  msg;
  onSubmit(){
    this.service.savepassword(this.reg,this.type).subscribe(
      res => {
        console.log(res);
        if(res['sucsess']==false){
          this.msg=res['message'];
          this.router.navigate(['login']);
          this.router.navigateByUrl('/signup')
        }else{
         this.reg.password ='';
         this.reg.confirmPassword='';
         
          this.msg=res['message'];

        }
      },
      err => {
        console.log(err);
        this.msg='';
      }
    );
  }
}

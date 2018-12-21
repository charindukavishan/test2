import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.scss']
})
export class ResetpwComponent implements OnInit {
  // email='';
  model ={
    email :''
  };
serverErrorMessages;
message=false;
  constructor(public service:RegserviceService) { }

  ngOnInit() {
  }
  onSubmit(){console.log(this.model.email)
    this.service.rstpw(this.model.email).subscribe(
      res => {
        this.message=true;
        this.serverErrorMessages=res['message'];
      console.log(this.serverErrorMessages)
        console.log(res);
        if(res['sucsess']==false){
          this.serverErrorMessages=res['message'];
          console.log(this.serverErrorMessages)
          // this.router.navigate(['newpassword']);
        }else{
          this.serverErrorMessages=res['message'];

        }
      },
      err => {
        console.log(err);
        this.serverErrorMessages='';
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
@Component({
  selector: 'app-newaddedparks',
  templateUrl: './newaddedparks.component.html',
  styleUrls: ['./newaddedparks.component.scss']
})
export class NewaddedparksComponent implements OnInit {

  constructor(public service:RegserviceService) { }
  private kepers ;
  private keepers=[];
  res;
  class;
  ngOnInit() {
    const token =this.service.getToken();
  const tokenPayload = decode(token);
    this.service.getkeepers(tokenPayload._id).subscribe(response => {this.kepers=response;
      this.res=this.kepers.length;
      
      for (let i = 0; i < this.kepers.length; i++) {
        
        if(this.kepers[i].state=="open"){
          this.class="btn btn-danger btn-round";
          this.kepers[i].state="close";
        }
          else{
          this.class="btn btn-warning btn-round"
          this.kepers[i].state="open";
        }
        this.keepers[i] = {
          id:this.kepers[i]._id,
          name: this.kepers[i].name,
          class: this.class,
          isactivate: this.kepers[i].isactivate,
          state:this.kepers[i].state
          // time:response[i].state,
        };
      }
    });
  }

  update(state,id){
    this.service.keeperstate(state,id).subscribe(response => {
      this.ngOnInit();
    });
  }


}

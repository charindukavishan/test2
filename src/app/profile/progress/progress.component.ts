import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor(public service: RegserviceService,public router:Router) { }
  private kepers;
  private keepers = [];
  res;
  class;
  ngOnInit() {
    const token = this.service.getToken();
    const tokenPayload = decode(token);
    this.service.getkeepers(tokenPayload._id).subscribe(response => {
    this.kepers = response;
      this.res = this.kepers.length;
      console.log(response)
      for (let i = 0; i < this.kepers.length; i++) {

        if (this.kepers[i].state == "open") {
          this.class = "btn btn-danger btn-round";
          this.kepers[i].state = "close";
        }
        else {
          this.class = "btn btn-warning btn-round"
          this.kepers[i].state = "open";
        }
        this.keepers[i] = {
          id: this.kepers[i]._id,
          name: this.kepers[i].name,
          class: this.class,
          isactivate: this.kepers[i].isactivate,
          state: this.kepers[i].state,
          monthrev:this.kepers[i].monthrev
                   // time:response[i].state,
        };
      }
    });
  }

  update(state, id) {
    const token = this.service.getToken();
    const tokenPayload = decode(token);
    if (tokenPayload.role == "admin")
      return;

    this.service.keeperstate(state, id).subscribe(response => {
      this.ngOnInit();
    });
  }
  parkPro(id){
    console.log(id)
    this.router.navigateByUrl('park/'+id);
  }
}

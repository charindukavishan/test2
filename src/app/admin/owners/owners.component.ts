import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  constructor(public service:RegserviceService,public router:Router) { }
  private kepers ;
  private owner ;
  private keepers=[];
  res;
  class;
  // ow;
  ngOnInit() {
    const token =this.service.getToken();
  const tokenPayload = decode(token);
    this.service.getowners().subscribe(response => {this.kepers=response;
      console.log(response)
      this.res=this.kepers.length;
      for (let i = 0; i < this.kepers.length; i++) {
        
          console.log(this.kepers[i].name)
          this.keepers[i] = {
            firstName:this.kepers[i].firstName,
            lastName: this.kepers[i].lastName,
            city: this.kepers[i].city,
            address:this.kepers[i].address,
            country:this.kepers[i].country,
            id:this.kepers[i]._id
            // state:this.kepers[i].state
            // time:response[i].state,
          };
       
      }
    });
  }

  profile(id){
    this.router.navigateByUrl('owner/'+id);
  }
ownerpro(id){

}
keeperpro(id){

}

}

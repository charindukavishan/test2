import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reported',
  templateUrl: './reported.component.html',
  styleUrls: ['./reported.component.scss']
})
export class ReportedComponent implements OnInit {


  constructor(public service:RegserviceService,public router:Router) { }
  private kepers ;
  private owner ;
  private keepers=[];
  res;
  class;
  // ow;
  ngOnInit() {
    this.service.reported().subscribe(response => {this.kepers=response;
      // console.log(response)
      this.res=this.kepers.length;
      for (let i = 0; i < this.kepers.length; i++) {
        
        this.service.getowner(this.kepers[i].ownerid).subscribe(user=>{
          this.owner=user;
          console.log(this.kepers[i].name)
          this.keepers[i] = {
            id:this.kepers[i]._id, 
            name: this.kepers[i].name, 
            owner: this.owner.firstName,
            ownerid:this.owner._id,
            state:this.kepers[i].state
            // time:response[i].state,
          };console.log(this.keepers[i].owner)
        });
      }
    });
  }

  accept(id){
    this.service.acceptpark(id).subscribe(response => {
      this.ngOnInit();
    });
     
  }
parkPro(id){
  console.log(id)
  this.router.navigateByUrl('park/'+id);
}
profile(id){console.log(id)
  this.router.navigateByUrl('owner/'+id);
}

reject(id){
this.service.reject(id).subscribe(response => {
    this.ngOnInit();
  });
}
}

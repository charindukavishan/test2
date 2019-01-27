import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-keeper-pro-view',
  templateUrl: './keeper-pro-view.component.html',
  styleUrls: ['./keeper-pro-view.component.scss']
})
export class KeeperProViewComponent implements OnInit {


  constructor(public service:RegserviceService,public route:ActivatedRoute) { }
  private kepers ;
  private keepers=[];
  res;
  class;
  id;
  user;
    userId='';
  pic="../../../assets/img/faces/default.jpg";
  email;
  parkName;
  numberOfSlots;
  openHours;
  alocatedSlots1;
  hourCharge1;
  alocatedSlots2;
  hourCharge2;
  alocatedSlots3;
  hourCharge3;
  alocatedSlots4;
  hourCharge4;
  alocatedSlots5;
  hourCharge5;
  docUrl;


  ngOnInit() {console.log('jhsdvcshdvfhk')
    this.route.params.subscribe(params => {
      this.id = params['id'];});
      console.log(this.id)
      this.service.getkeeperprofile(this.id).subscribe(
        res => {
          this.user = res;
          this.userId=this.user._id;
          this.service.setid(this.user._id);
          this.pic=this.user.proPic;
          // console.log(this.userId);
          console.log(this.user)

          this.email=this.user.email;
      this.parkName=this.user.parkName;
      this.numberOfSlots=this.user.numberOfSlots;
      this.openHours=this.user.openHours;
      this.alocatedSlots1=this.user.alocatedSlots1;
      this.hourCharge1=this.user.hourCharge1;
      this.alocatedSlots2=this.user.alocatedSlots2;
      this.hourCharge2=this.user.hourCharge2;
      this.alocatedSlots3=this.user.alocatedSlots3;
      this.hourCharge3=this.user.hourCharge3;
      this.alocatedSlots4=this.user.alocatedSlots4;
      this.hourCharge4=this.user.hourCharge4;
      this.alocatedSlots5=this.user.alocatedSlots5;
      this.hourCharge5=this.user.hourCharge5;
      this.docUrl=this.user.docUrl
        },
        err => { 
          console.log(err);
          
        });


  }



}

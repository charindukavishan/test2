import { Component, OnInit } from '@angular/core';

import { RegserviceService } from '../../servers/regservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { google } from '@google/maps';
@Component({
  selector: 'app-keeperprofile',
  templateUrl: './keeperprofile.component.html',
  styleUrls: ['./keeperprofile.component.scss']
})
export class KeeperprofileComponent implements OnInit {
isslot=false
home=true;
MotorBicycle=false
ThreeWheelers=false
LightVehicle=false
HeavyVehicle=false
userDetails;
userId='';
  constructor(public service:RegserviceService,public router:Router,private location :Location) { }

  ngOnInit() {
    
    if(!this.service.isLoggedIn())
    this.router.navigate(['/login']);

    this.service.getKeeperProfile().subscribe(
      res => { 
        this.userDetails = res['user'];
        console.log(this.userDetails)
        this.userId=this.userDetails._id;
        this.service.setid(this.userDetails._id);
        // console.log(this.userId);
        console.log(this.userDetails.name)
      },
      err => { 
        console.log(err);
        
      });
  }
slotmode(){
  this.isslot=true;
  this.home=false;
}
gohome(){
  this.isslot=false;
  this.home=true
}

ishome(){
  var titlee = this.location.prepareExternalUrl(this.location.path());

  if( titlee === '/keeper' ) {
      return true;
  }
  else {
      return false;
  }
}
}

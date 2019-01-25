import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';

@Component({
  selector: 'app-parkingslot',
  templateUrl: './parkingslot.component.html',
  styleUrls: ['./parkingslot.component.scss']
})
export class ParkingslotComponent implements OnInit {

  constructor(public service:RegserviceService) { }
user:any;
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
  ngOnInit() {
   
    this.service.getKeeperProfile().subscribe(
      res => { 
        this.user = res['user'];
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
        
      },
      err => { 
        console.log(err);
        
      });
  }

}

      
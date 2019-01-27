import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor(private flashMessage:FlashMessagesService,public service:RegserviceService) {}
  bookings:any;
  vehicleNum;
  DriverName;
  DriverId;
  date;
  arivalTime;
  depatureTime;
  vehicleType;
  slotNum;
  slotId;
  
  ngOnInit() {

    const token =this.service.getToken();
    const tokenPayload = decode(token);
    this.service.getbooking(tokenPayload._id).subscribe(res =>{
this.bookings=res;
    },
    err=>{
        
    }
    );}

  delete(id){console.log(id)
      this.service.deletebook(id).subscribe(res=>{
        this.flashMessage.show('Delete successfull', {cssClass: 'alert-danger', timeout: 3000});
        this.ngOnInit();
      })
  }
  sethistory(data){
      this.service.sethistory(data).subscribe(res=>{
          this.flashMessage.show('Release successfull', {cssClass: 'alert-success', timeout: 3000});
          this.service.deletebook(data.bookId).subscribe(res=>{
        this.flashMessage.show('Remove booking', {cssClass: 'alert-danger', timeout: 3000});
        this.ngOnInit();
      })
          this.ngOnInit();
        })
        
  }

}

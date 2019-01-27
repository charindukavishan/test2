import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.scss']
})
export class BookinghistoryComponent implements OnInit {


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
    this.service.gethistory(tokenPayload._id).subscribe(res =>{
this.bookings=res;
    },
    err=>{
        
    }
    );}




}

import { Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RegserviceService } from '../../../servers/regservice.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="card bg-light mb-3" style="width: 100%;">
  
  <div class="card-body">
  <flash-messages></flash-messages>
  <table style="border-collapse: collapse;
  border-spacing: 20px;
  width: 100%;
  borde:none">
  <tr style="font-size:10px">
    <th>Vehicle Number</th>
    <th>Driver Name</th>
    <th>Diver Id</th>
    <th>Date</th>
    <th>Arrive Time</th>
    <th>Leave Time</th>
    <th>Release</th>
    <th>Cancel</th>
  </tr>
 
  <tr *ngFor="let i of bookings" >
    <td>{{i.vehicleNum}}</td>
    <td>{{i.DriverName}}</td>
    <td>{{i.DriverId}}</td>
    <td>{{i.date}}</td>
    <td>{{i.arivalTime}}</td>
    <td>{{i.bookId}}</td>
    <td><button type="button"  (click)="sethistory(i)"  class="btn btn-primary btn-sm">Accept</button></td>
    <td><button type="button" (click)="delete(i.bookId)" class="btn btn-danger btn-sm">Cancel</button></td>
  </tr>
  
</table>
    
 </div>
  
</div>
`

})
export class NgbdModalContent {

    @Input() Id;

    constructor(private flashMessage:FlashMessagesService,public activeModal: NgbActiveModal,public service:RegserviceService) {}
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

      
      this.service.getbookings(this.Id).subscribe(res =>{
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
            this.flashMessage.show('Accept', {cssClass: 'alert-success', timeout: 3000});
            this.service.deletebook(data.bookId).subscribe(res=>{
          this.flashMessage.show('Remove booking', {cssClass: 'alert-danger', timeout: 3000});
          this.ngOnInit();
        })
            this.ngOnInit();
          })
          
    }

}


@Component({
    selector: 'popup',
    template: ``

})
export class popup {

    @Input() Id;

    constructor(private flashMessage:FlashMessagesService,public activeModal: NgbActiveModal,public service:RegserviceService) {}

    
    ngOnInit() {}


}



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
    data={
        keeperId:'',
        slotId:''

    }
  constructor(private flashMessage:FlashMessagesService,private modalService: NgbModal,private service:RegserviceService ,private router: Router) {}
    open(id) {
        const modalRef = this.modalService.open(NgbdModalContent,{ size: 'lg' });
        modalRef.componentInstance.Id = id;

        
    }
    
    Release(id){
        this.data.slotId=id;
        this.service.release(this.data).subscribe(res=>{
            this.ngOnInit();
            // console.log('success');
            this.flashMessage.show('Slot is available now', {cssClass: 'alert-success', timeout: 3000});
        })

    }
        
    user;
    amounts;
    Arr :any; //Array type captured in a variable
    num:number ;
    charge;

   
    
    
  
    ngOnInit() {

      
      this.service.getKeeperProfile().subscribe(profile =>{
  
        
        this.user= profile['user'];
        console.log(this.user)
        this.amounts=this.user.alocatedSlots1;
        this.num= this.user.alocatedSlots1;
        this.charge=this.user.hourCharge1;
        this.Arr=this.user.type1;
        this.data.keeperId=this.user._id;
        console.log(this.Arr)
      //   this.i = this.Arr.indexof(this.Arr);
      },


  
      
      err=>{
        console.log(err);
        return false;
      }
      );
      
      
    
    }
  
  finalPrice=0;
  penalty=0;
  //   onClick(){
  //     this.Arr.i.isBook="false";
  //   }
   
  price(data){
    let date=new Date();
    var one_hour=1000*60;
  var date1_ms = date.getTime();
  var date2_ms = data.parkedAtgetTime();
  var difference_ms = date2_ms - date1_ms;    
if(Math.round(difference_ms/one_hour)>15)
this.penalty=(difference_ms/one_hour);
else this.penalty=0;

this.finalPrice=(data.charge+this.penalty);console.log(date.getTime())
}

  
  
  onClick1(){
      alert("shqwqwk");
  }
  
  }
  
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { google } from '@google/maps';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../../servers/validate.service';

@Component({
  selector: 'app-keeperedit',
  templateUrl: './keeperedit.component.html',
  styleUrls: ['./keeperedit.component.scss']
})
export class KeepereditComponent implements OnInit {

  constructor(private validateService: ValidateService,
    private flashMessage:FlashMessagesService,public service: RegserviceService, public router: Router, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  name:String;
  username:String;
  email:String;
  password:String;
  mobileNum: String;
  NICnumber:String;
  parkName: String;
  numberOfSlots:Number;
  openHours:String;
  alocatedSlots1:Number;
  hourCharge1:String;
  alocatedSlots2:Number;
  hourCharge2:String;
  alocatedSlots3:Number;
  hourCharge3:String;
  alocatedSlots4:Number;
  hourCharge4:String;
  alocatedSlots5:Number;
  hourCharge5:String;
  MaximumWeight:String;
  MaximumHeight:String;
  lat:String;
  lng:String;
  city:String;
  country:String;
  confirmPassword:String;
  zip:String;
  address:String


  iserror: boolean = false;
  res = '';
  serverErrorMessages = '';
  laat: number = null;
  lnng: number = null;
  zoom: number = 4;
  origin = { lat: this.laat, lng: this.lnng };
  destination = { lat: null, lng: null };
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  userDetails;
  userId='';

  ngOnInit() {
    if(!this.service.isLoggedIn())
    this.router.navigate(['/login']);

    this.service.getKeeperProfile().subscribe(
      res => { 
        this.userDetails = res['user'];
        console.log(this.userDetails)
        this.userId=this.userDetails._id;
        // console.log(this.userId);
        console.log(this.userDetails.name)
      },
      err => { 
        console.log(err);
        
      });
  }
  register() {
console.log('skjfgnfsfnkagjb')
    const user={
      name: this.name,
      email: this.email,
      username: this.username,
      // password: this.password,
      mobileNum: this.mobileNum,
      NICnumber: this.NICnumber,
      parkName: this.parkName,
      numberOfSlots:this.numberOfSlots,
      openHours: this.openHours,
      alocatedSlots1: this.alocatedSlots1,
      hourCharge1: this.hourCharge1,
      alocatedSlots2: this.alocatedSlots2,
      hourCharge2: this.hourCharge2,
      alocatedSlots3: this.alocatedSlots3,
      hourCharge3: this.hourCharge3,
      alocatedSlots4: this.alocatedSlots4,
      hourCharge4: this.hourCharge4,
      alocatedSlots5: this.alocatedSlots5,
      hourCharge5: this.hourCharge5,
      MaximumWeight:this.MaximumWeight,
      MaximumHeight: this.MaximumHeight,
      role:"keeper",
      // lat:this.lat,
      // lng:this.lng
    }
console.log(user)
// if(!this.validateService. validateRegister(user)){
//   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
//   return false;

// }



// ///Validate Email
// if(!this.validateService.validateEmail(user.email)){
 
//   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
//   return false;

// }
    const token = this.service.getToken();
    const tokenPayload = decode(token);
    this.service.regkeeper(user, tokenPayload._id)
      .subscribe(
        (response) => {
          if (response) {
            this.res = response['status'];
            console.log(response)
            if (!this.res) {
              this.serverErrorMessages = 'Your email is already exists'
            } else {
              console.log(response)
              this.serverErrorMessages = "Registration Succsesfull";
              this.router.navigateByUrl('/user-profile/myparks');
            }
          }

        }
        ,
        (error) => {
          console.log(error); this.iserror = true;
          { if (error) this.serverErrorMessages = 'Your email is already exists'; }
        }
      );
  }


  public closeAlert() {
    this.iserror = false;
  }
}

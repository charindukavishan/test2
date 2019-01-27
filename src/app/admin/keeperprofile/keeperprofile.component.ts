import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-keeperprofile',
  templateUrl: './keeperprofile.component.html',
  styleUrls: ['./keeperprofile.component.scss']
})
export class KeeperprofileComponent implements OnInit {


  constructor(public service:RegserviceService,public route:ActivatedRoute) { }
  private kepers ;
  private keepers=[];
  res;
  class;
  id;
  userDetails;
    userId='';
  pic="../../../assets/img/faces/default.jpg";
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];});
      console.log(this.id)
      this.service.getkeepers(this.id).subscribe(
        res => {
          this.userDetails = res;
          this.userId=this.userDetails._id;
          this.service.setid(this.userDetails._id);
          this.pic=this.userDetails.proPic;
          // console.log(this.userId);
          // console.log(this.userDetails)
        },
        err => { 
          console.log(err);
          
        });


  }



}

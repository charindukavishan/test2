import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
user:any;
  constructor(public service :RegserviceService) { }

  ngOnInit() {
    this.service.getKeeperProfile().subscribe(
      res => { 
        this.user = res['user'];
        console.log(this.user)
        
      },
      err => { 
        console.log(err);
        
      });
  }

}

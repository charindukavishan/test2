import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-editpropic',
  templateUrl: './editpropic.component.html',
  styleUrls: ['./editpropic.component.scss']
})
export class EditpropicComponent implements OnInit {

  constructor(public service:RegserviceService) { }
  private files = [];
  id='';
  private url ='';
  private uploader: FileUploader;
  ngOnInit() {
    const token =this.service.getToken();
    const tokenPayload = decode(token);
    this.id=tokenPayload._id; 
this.url='http://localhost:3001/api/updateprofilepic/'+tokenPayload._id; 
    this.uploader = new FileUploader({url:this.url ,itemAlias: 'photo'});
  } 

}

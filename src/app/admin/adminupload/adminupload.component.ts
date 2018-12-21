import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
import { FileUploader } from 'ng2-file-upload';
import { FilesService } from '../servers/files.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminupload',
  templateUrl: './adminupload.component.html',
  styleUrls: ['./adminupload.component.scss']
})
export class AdminuploadComponent implements OnInit {

  constructor(private FileService: FilesService,private service:RegserviceService,public route:ActivatedRoute) { }
  private files = [];
  id='';
  sid;
  user='';
  private url = '';
  private uploader: FileUploader;
au='Bearer '+ this.service.getToken();
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sid = params['id'];});
    const token =this.service.getToken();
    const tokenPayload = decode(token);
    this.id=tokenPayload._id;
this.url='http://localhost:3001/api/upload/'+this.id+'/'+this.sid; 
console.log(this.url)
    
    this.uploader = new FileUploader({url:this.url ,itemAlias: 'photo'});


}




clear(){
  this.files = [];
  this.id='';
}

}

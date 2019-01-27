import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
import { FileUploader } from 'ng2-file-upload';



import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { KeeperprofileComponent } from '../keeperprofile/keeperprofile.component';


@Component({
  selector: 'app-keeper-pic',
  templateUrl: './keeper-pic.component.html',
  styleUrls: ['./keeper-pic.component.scss']
})
export class KeeperPicComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  profileUrl: Observable<string>;
  constructor(public service:RegserviceService,private afStorage: AngularFireStorage,public router:Router,public keeper:KeeperprofileComponent) { }
  pic="";
  private files = [];
  id='';
  private url ='';
model={
  url:"",
  PicUrl:""

}
  private uploader: FileUploader;


  ngOnInit() {
    const token =this.service.getToken();
    const tokenPayload = decode(token);
    this.id=tokenPayload._id; 
this.url='http://localhost:3001/api/updatekeeperpic/'+tokenPayload._id; 
    this.uploader = new FileUploader({url:this.url ,itemAlias: 'photo'});




  } 




  
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL() )
   )
  .subscribe(
  );
  this.task.snapshotChanges().pipe(
    finalize(() => {
      this.ref.getDownloadURL().subscribe(PicUrl => {
        this.model.PicUrl=PicUrl;
        // console.log(url); // <-- do what ever you want with the url..
        const token =this.service.getToken();
    const tokenPayload = decode(token);
    this.id=tokenPayload._id; 
this.model.url='http://localhost:3000/api/updatekeeperpic/'+tokenPayload._id; 
this.service.editkeeperPic(this.model).subscribe(
  res => { 
    
    this.keeper.ngOnInit();
    this.keeper.editpi=false;
  },
  err => { 
    console.log(err);
    
  });
        // this.pic=url;
      });
    })
  ).subscribe();
   }

}

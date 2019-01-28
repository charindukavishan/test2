import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { KeeperprofileComponent } from '../../admin/keeperprofile/keeperprofile.component';
import { Observable } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';
import decode from 'jwt-decode';
import { finalize } from 'rxjs/operators';
import { KeepersComponent } from '../../admin/keepers/keepers.component';
import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'app-editpropic',
  templateUrl: './editpropic.component.html',
  styleUrls: ['./editpropic.component.scss']
})
export class EditpropicComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  profileUrl: Observable<string>;
  constructor(public service: RegserviceService, private afStorage: AngularFireStorage, public router: Router, public keeper: ProfileComponent) { }
  pic = "";
  private files = [];
  id = '';
  private url = '';
  model = {
    url: "",
    PicUrl: ""

  }
  isloading=false
  private uploader: FileUploader;


  ngOnInit() {
    const token = this.service.getToken();
    const tokenPayload = decode(token);
    this.id = tokenPayload._id;




  }





  upload(event) {
    this.isloading=true
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL())
    )
      .subscribe(
      );
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(PicUrl => {
          this.model.PicUrl = PicUrl;
          this.isloading=false
          // console.log(url); // <-- do what ever you want with the url..
          const token = this.service.getToken();
          const tokenPayload = decode(token);
          this.id = tokenPayload._id;
          this.model.url = 'http://157.230.218.160:3000/api/updateprofilepic/' + tokenPayload._id;
          this.service.editkeeperPic(this.model).subscribe(
            res => {

              this.keeper.ngOnInit();
              this.keeper.editpi = false;
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

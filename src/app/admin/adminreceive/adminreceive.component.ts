import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { FilesService } from '../servers/files.service';

@Component({
  selector: 'app-adminreceive',
  templateUrl: './adminreceive.component.html',
  styleUrls: ['./adminreceive.component.scss']
})
export class AdminreceiveComponent implements OnInit {

  constructor(private FileService: FilesService,private service:RegserviceService) { }
  private files = [];

  response:any;
  private user;

  ngOnInit() {
        this.FileService.showFileNames().subscribe(res => {
          this.response=res;
          console.log(this.response)
      for (let i = 0; i < this.response.json().length; i++) {

this.FileService.getusername(this.response.json()[i].userId).subscribe(
  resss=>{this.user=resss;
    console.log(resss.json().firstName)
    this.files[i] = {
      filename: this.response.json()[i].filename,
      originalname: this.response.json()[i].originalname,
      contentType: this.response.json()[i].mimetype,
      time:this.response.json()[i].time,
      username:resss.json().firstName
    };
  }
)
// console.log(this.user)


      //  console.log(this.response.json()[i].mimetype)
      }
    });

  }
  downloadPdf(filename, contentType) {
    this.FileService.downloadPDF(filename, contentType).subscribe(
      (res) => {console.log(res)
        const file = new Blob([res.blob()], { type: contentType });
        console.log(file)
      const fileURL = URL.createObjectURL(file);
      console.log(fileURL)
      window.open(fileURL);


      // window.open('/download');
      }
    );
  }

}

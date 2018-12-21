import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
 
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { SigninComponent } from './signin/signin.component';
import { RegserviceService } from './servers/regservice.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ReceiveComponent } from './profile/receive/receive.component';
import { TtComponent } from './tt/tt.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ParkkeepersComponent } from './profile/parkkeepers/parkkeepers.component';
import { MapComponent } from './profile/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { EditpropicComponent } from './profile/editpropic/editpropic.component';
import { ProfileeditComponent } from './profile/profileedit/profileedit.component';
import { AdminComponent } from './admin/admin.component';
import { ParkkeeperComponent } from './parkkeeper/parkkeeper.component';
import { KeeperregComponent } from './parkkeeper/keeperreg/keeperreg.component';
import { ProfileeditadminComponent } from './admin/profileeditadmin/profileeditadmin.component';
import { ParksComponent } from './admin/parks/parks.component';
import { KeepersComponent } from './admin/keepers/keepers.component';
import { AdminreceiveComponent } from './admin/adminreceive/adminreceive.component';
import { NewaddedparksComponent } from './admin/newaddedparks/newaddedparks.component';
import { AdminmapComponent } from './admin/adminmap/adminmap.component';
import { OwnersComponent } from './admin/owners/owners.component';
import { OwnerprofileComponent } from './admin/ownerprofile/ownerprofile.component';
import { AdminuploadComponent } from './admin/adminupload/adminupload.component';
import { AdminmessagesComponent } from './admin/adminmessages/adminmessages.component';
import { AdminsendComponent } from './admin/adminsend/adminsend.component';
import { KeeperprofileComponent } from './parkkeeper/keeperprofile/keeperprofile.component';
import { ParkingslotComponent } from './parkkeeper/parkingslot/parkingslot.component';
import { ResetpwComponent } from './signup/resetpw/resetpw.component';
import { NewpwComponent } from './signup/newpw/newpw.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    SigninComponent,
    FooterComponent,
    FileUploadComponent,
    ReceiveComponent,
    TtComponent,
    UserProfileComponent,
    ParkkeepersComponent,
    MapComponent,
    EditpropicComponent,
    ProfileeditComponent,
    AdminComponent,
    ParkkeeperComponent,
    KeeperregComponent,
    ProfileeditadminComponent,
    ParksComponent,
    KeepersComponent,
    AdminreceiveComponent,
    NewaddedparksComponent,
    AdminmapComponent,
    OwnersComponent,
    OwnerprofileComponent,
    AdminuploadComponent,
    AdminmessagesComponent,
    AdminsendComponent,
    KeeperprofileComponent,
    ParkingslotComponent,
    ResetpwComponent,
    NewpwComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDySdsZG3tJO4FJqgu24ujKy8kIdlexmsE'
    })
  ],
  providers: [RegserviceService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

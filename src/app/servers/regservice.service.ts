import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  url="http://localhost:3000/api/web";
 noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };  
  
  constructor(private http: HttpClient) {}
  
  storedetails(details){
    return this.http.post(this.url+'/register',details,this.noAuthHeader);
   }

   regkeeper(details,id){
    return this.http.post(this.url+'/regkeeper/'+id,details,this.noAuthHeader);
   }
   editkeeper(details,id){
    return this.http.post(this.url+'/editkeeper/'+id,details,this.noAuthHeader);
   }

   login(authCredentials,p) {
     console.log(authCredentials); 
     return this.http.post(this.url +p+ '/authenticate', authCredentials,this.noAuthHeader);
   }
   getUserProfile() {
     return this.http.get(this.url + '/userProfile');
   }
   editPic(data){console.log(data)
     return this.http.post(data.url,data,this.noAuthHeader);
   }

   editkeeperPic(data){console.log(data)
    return this.http.post(data.url,data,this.noAuthHeader);
  }
   getKeeperProfile() {
    return this.http.get(this.url + '/keeperProfile');
  }
  release(data){
    return this.http.post(this.url+'/releaseslot',data);
  }

  getowner(id) {
    return this.http.get(this.url + '/userProfile/'+id);
  }
   getkeepers(id) {
    return this.http.get(this.url+'/getkeepers/'+id);
  }
  sethistory(data){
    return this.http.post(this.url+'/sethistory',data,this.noAuthHeader);
  }

  getkeeperprofile(id){
    return this.http.get(this.url+'/getkeeperprofile/'+id);
  }
  getnewkeepers() {
    return this.http.get(this.url+'/getnewkeepers');
  }

  reported() {
    return this.http.get(this.url+'/reported');
  }
  allkeepers(){
    return this.http.get(this.url+'/allkeepers')
  }
  getowners(){
    return this.http.get(this.url+'/getowners');
  }

   edit(form,id){console.log(form)
    return this.http.put(this.url+'/editpro/'+id,form);
   }
 rstpw(email,link){
   return this.http.get(this.url+'/rstpw/'+link+'/'+email);
 }

 newpassword(token,type){
    
   return this.http.get(this.url+'/resetpassword/'+type+'/'+token);

 }
 keeperstate(state,id){
  return this.http.get(this.url+'/setstate/'+id+'/'+state);
}
acceptpark(id){console.log(id)
  return this.http.get(this.url+'/acceptpark/'+id);
}

reject(id){console.log(id)
  return this.http.get(this.url+'/reject/'+id);
}
 savepassword(password,type){
   return this.http.put(this.url+'/savepassword/'+type,password);
 }
   //Helper Methods
 
   setToken(token: string) {
     localStorage.setItem('token', token);
   }
 setid(id:string){
  localStorage.setItem('id',id);
 }

 getid(){
  return localStorage.getItem('id');
 }

 deleteid(){
  localStorage.removeItem('id');
 }

 setuser(name:string,id:string){
  localStorage.setItem('usernic',name);
  localStorage.setItem('userid',id);
 }

 getuser(){
  return localStorage.getItem('usernic');
 }
 getuserid(){
  return localStorage.getItem('userid');
 }
 deleteuser(){
  localStorage.removeItem('usernic');
 }
   getToken() {
     return localStorage.getItem('token');
   }
 
   deleteToken() {
     localStorage.removeItem('token');
     this.deleteid();
   }
 
   getUserPayload() {
     var token = this.getToken();
     if (token) {
       var userPayload = atob(token.split('.')[1]);
       return JSON.parse(userPayload);
     }
     else
       return null;
   }
 
   isLoggedIn() {
     var userPayload = this.getUserPayload();
     if (userPayload)
       return userPayload.exp > Date.now() / 1000;
     else
       return false;
   }
getusers(){console.log('getuser')
  return this.http.get(this.url + '/users');
}

   newpost(post){
     return this.http.post(this.url+'/newPost',post);
    }
    getAllPosts(){
     return this.http.get(this.url + '/getPosts');
    }
  
    getbookings(id){
      return this.http.get(this.url+'/bookingDetails/'+id);
    }
    getbooking(id){
      return this.http.get(this.url+'/booking/'+id);
    }
    gethistory(id){
      return this.http.get(this.url+'/bookinghistory/'+id);
    }
    deletebook(id){
      return this.http.get(this.url+'/deletebook/'+id);
    }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{RegserviceService} from '../servers/regservice.service';
import { Router } from "@angular/router";
import decode from 'jwt-decode';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service : RegserviceService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {

      const expectedRole = next.data.expectedRole;

      const token =this.service.getToken();
  
      // decode the token to get its payload
      const tokenPayload = decode(token);
      if (!this.service.isLoggedIn() || tokenPayload.role !== expectedRole ) {
        this.router.navigateByUrl('/login');
        this.service.deleteToken();
        return false;
      }
    return true;
  }
}

import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RegserviceService } from '../../servers/regservice.service';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    url;

    constructor(public location: Location, private element : ElementRef ,private service:RegserviceService,private router :Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        
    const token =this.service.getToken();
    const tokenPayload = decode(token);
    this.url=tokenPayload.role
    if(this.url=="user")
    this.url="user-profile";
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    isLogin(){
        return this.service.isLoggedIn();

    }  
signout(){
    this.service.deleteToken();
    this.router.navigate(['/signup']);
}
     isProfile(){
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/user-profile/*' ) {
            return true;
        }
        else {
            return false;
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    isadmin(){
        const token =this.service.getToken();

        // decode the token to get its payload
        const tokenPayload = decode(token);
        if(tokenPayload.role =="admin")
        return true;
        return false;
    }
}

import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";

import { MapsAPILoader, AgmMap } from "@agm/core";
import { GoogleMapsAPIWrapper } from "@agm/core/services";
import { AgmDirectionModule } from "agm-direction";
import { FormControl } from "@angular/forms";
import { RegserviceService } from "../../servers/regservice.service";
import decode from 'jwt-decode';
declare var google: any;
import { google } from '@google/maps';

@Component({
  selector: 'app-adminmap',
  templateUrl: './adminmap.component.html',
  styleUrls: ['./adminmap.component.scss']
})
export class AdminmapComponent implements OnInit {
  lat: number = null;
  lng: number = null;
  zoom: number = 4;
  origin = { lat: this.lat, lng: this.lng };
  destination = { lat: null, lng: null };
  // public searchControl: FormControl;
  public searchControl: FormControl
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, public service: RegserviceService) { }
  private kepers;
  private keepers = [];
  res;
  class; 
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
        console.log(this.lat, this.lng);
      },
      err => console.log(err)
    );
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: [],
          componentRestrictions: { country: "LK" }
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.destination.lat = place.geometry.location.lat();
          this.destination.lng = place.geometry.location.lng();
          console.log(this.destination);
        });
      });
    });
 

    this.service.allkeepers().subscribe(response => {
    this.kepers = response;
      this.res = this.kepers.length;
      for (let i = 0; i < this.kepers.length; i++) {

        if (this.kepers[i].state == "open") {
          this.class = "btn btn-danger btn-round";
          this.kepers[i].state = "close";
        }
        else {
          this.class = "btn btn-warning btn-round"
          this.kepers[i].state = "open";
        }
        this.keepers[i] = {
          
          lat: this.kepers[i].lat,
          lng: this.kepers[i].lng,
          // time:response[i].state,
        };
      }
    });



  }
  // calculateDuration() {
  //   var directionsService = new google.maps.DirectionsService();
  //   var directionsDisplay = new google.maps.DirectionsRenderer();
  //   var mapOptions = {
  //     zoom: 15,
  //     center: this.origin
  //   };
  //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //   directionsDisplay.setMap(map);
  //   var request = {
  //     origin: this.origin,
  //     destination: this.destination,
  //     travelMode: "DRIVING"
  //   };
  //   directionsService.route(request, function(response, status) {
  //     console.log(response);
  //     // var point = response.routes[0].legs[0];
  //     // if (status == "OK") {
  //     //   document.getElementById("point").innerHTML =
  //     //     point + point.duration.text + " km";
  //     // }
  //   });
  // }

  // calculateDuration() {
  //   var duration = google.maps.geometry.duration(
  //     new google.maps.LatLng(this.lat, this.lng),
  //     new google.maps.LatLng(this.destination.lat, this.destination.lng)
  //   );
  //   document.getElementById("duration").innerHTML = duration / 1000 + "S";
  // }

  calculateDistance() {
    // console.log(google.maps.geometry.spherical.computeDurationBetween());
    var distance = google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(this.lat, this.lng),
      new google.maps.LatLng(this.destination.lat, this.destination.lng)
    );
    console.log(distance);
    document.getElementById("distance").innerHTML = distance / 1000 + "km";
  }
  click() {
    console.log('click')
  }
}

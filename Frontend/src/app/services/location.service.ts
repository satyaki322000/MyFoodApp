import { Injectable } from '@angular/core';
import { LatLngLiteral } from 'leaflet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  getCurrentLocation(): Observable<LatLngLiteral> {
    return new Observable((obs) => {
      if (!navigator.geolocation) return;
      return navigator.geolocation.getCurrentPosition(
        (pos) => {
          obs.next({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
        },
        (error)=>{
          obs.error(error);
        }
      )
    })
  }
}

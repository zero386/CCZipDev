import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { 

  }

  getListRestaurants(): Observable<any>{
    const headersZipDev = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'user-key': '7664cc0ce28e49c6ce03891b8ec5ab6f'
    }
    return this.httpClient.get<any>('https://developers.zomato.com/api/v2.1/establishments?city_id=302', { headers: headersZipDev } );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private endpoint = 'https://staging-core.api.drdropin.no/v1/clinics';

  constructor(private http: HttpClient) { }

  getClinics(): Observable<any> {
    return this.http.get(this.endpoint);
  }  
}

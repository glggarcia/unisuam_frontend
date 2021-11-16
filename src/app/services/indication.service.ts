import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Indication } from '../models/indication.model';

const baseUrl = 'http://localhost:8000/api/indications';

@Injectable({
  providedIn: 'root'
})

export class IndicationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateStatus(id: any): Observable<any> {
    console.log(id);
    return this.http.patch(`${baseUrl}/${id}`, '');
  }

  deleteIndication(id: any): Observable<any> {
    console.log(id);
    return this.http.delete(`${baseUrl}/${id}`);
  }
  
}

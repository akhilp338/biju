import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InspectionReport } from './inspection-report';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {


  private baseUrl = 'http://localhost:8080/api/v1/punchlists';

  constructor(private http: HttpClient) { }
  
  createInspectionReport(InspectionReport: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, InspectionReport);
  }
  getInspectionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteInspection(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
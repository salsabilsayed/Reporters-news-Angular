import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporter } from '../interfaces/reporterModel';

@Injectable({
  providedIn: 'root'
})
export class ReporterService {

  constructor(private http:HttpClient) { }
  url:string = 'http://localhost:3000/'

  getProfile(){
    return this.http.get<Reporter>(this.url+'profile')
  }
}

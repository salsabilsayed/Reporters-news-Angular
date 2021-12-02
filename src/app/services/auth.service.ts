import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:3000/'

  signUp(data:any){
    return this.http.post(this.url+'reporters',data)
  }

  login(data:any){
    return this.http.post(this.url+'reporters/login',data)
  }

  logout(){
    return this.http.delete(this.url+'logout')
  }

  getToken(){
    return localStorage.getItem('token');
  }
}

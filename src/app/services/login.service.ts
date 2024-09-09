import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


export interface LoginRequest {
  userRed: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /*url!: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.urlApi;
  }


  onLogin(data: LoginRequest) {
    return this.httpClient.post(`${this.url}/login`, data);
  }*/
}

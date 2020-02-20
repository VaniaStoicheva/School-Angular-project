import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';

const appKey = "kid_r1cvWi9zI" 
const appSecret = "ac02ed802c4b49b88056a139aef774cb" 
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentAuthtoken : string;

 
  
  constructor(
    private http : HttpClient
  ) { }


  login(login : IUser) {
    return this.http.post(
      loginUrl,
      JSON.stringify(login),
     
      {
        headers: this.createAuthHeaders('Basic')
      }
    )
  } 

  register(register : IUser) {
    return this.http.post(
      registerUrl, 
      JSON.stringify(register),
      { 
        headers: this.createAuthHeaders('Basic')
      }
    )
  }

  logout() {
    return this.http.post(
      logoutUrl,
      {},
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  isLogged() {
    let authtoken : string = localStorage.getItem('authtoken');

    return authtoken === this.currentAuthtoken;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value : string) {
    this.currentAuthtoken = value;
  }

  private createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }
}

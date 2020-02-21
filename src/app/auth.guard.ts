import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from './user/user.service';
import { AuthenticationService } from './user/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/* export class AuthGuard implements CanActivate {
  constructor(private userService: UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.isLogged==route.data.isLogged;
  } */
 /*  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.authService.isLogged==route.data.isLogged;
    } */
    export class AuthGuard implements CanActivate {
      constructor(private router:Router){}
      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
          if(sessionStorage.getItem('token')){
            this.router.navigate(['']);
          }
        return true;
      }
      
    }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../user/authentication.service';
import { IUser } from '../shared/interfaces/user';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../error-styles.scss']
})
export class LoginComponent implements OnInit {

   emailRegex=new RegExp('[A-Z0-9a-z._%+-`]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}');

   public loginFail : boolean;
   isLogged:boolean;
   isLoggedIn:boolean;
   username:string;

  constructor(
    private authService:AuthenticationService,
    private router:Router) {
      
     }

  ngOnInit() {
   
  }

  handleLogin(user:IUser){
    this.authService.login(user)
    .subscribe(
      data => {
        
        this.successfulLogin(data);
      },
      err => {
        this.loginFail = true;
      }
    )
    
  }

 
  successfulLogin(data) : void {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    
    
    this.loginFail = false;
    this.isLogged=true;
    this.isLoggedIn=true;
    this.router.navigate(['/']);
  }
}

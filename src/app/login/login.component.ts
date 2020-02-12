import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../user/authentication.service';
import { IUser } from '../shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../error-styles.scss']
})
export class LoginComponent implements OnInit {

   emailRegex=new RegExp('[A-Z0-9a-z._%+-`]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}');

   public loginFail : boolean;
   isLoggedIn:boolean;

  constructor(
    private authService:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }

  handleLogin(user:IUser){
    console.log(user)
    this.authService.login(user)
    .subscribe(
      data => {
        this.successfulLogin(data);
       
      },
      err => {
        this.loginFail = true;
      }
    )
    this.router.navigate(['']);
  }

  successfulLogin(data) : void {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.loginFail = false;
    this.isLoggedIn=true;
    
   
  }

}

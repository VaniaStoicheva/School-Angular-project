import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../error-styles.scss']
})
export class LoginComponent implements OnInit {

   emailRegex=new RegExp('[A-Z0-9a-z._%+-`]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}');
   
  constructor(
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }

  handleLogin(username:string,password:string){
    this.userService.login(username,password);
    this.router.navigate(['']);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../error-styles.scss']
})
export class RegisterComponent implements OnInit {

  emailRegex=new RegExp('[A-Z0-9a-z._%+-`]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}');

  constructor( 
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  handleLogin(username:string,password:string){
    this.userService.register(username,password);
    this.router.navigate(['']);
  }


}

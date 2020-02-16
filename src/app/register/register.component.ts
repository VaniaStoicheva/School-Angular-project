import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../user/authentication.service';
import { IUser } from '../shared/interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../error-styles.scss']
})
export class RegisterComponent implements OnInit {

  emailRegex=new RegExp('[A-Z0-9a-z._%+-`]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}');

  public registeredUser : string;
  public registerSuccess : boolean;
  public registerFail : boolean;
  isLoggedIn:boolean;

  constructor( 
    private authService:AuthenticationService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  handleRegister(user:IUser){
    this.authService.register(user).subscribe(data=>{
      this.successfulRegister(data);
    },
    err => {
      
      
      this.registerFail = true;
    
    })
    
  }


  successfulRegister(data) : void {
    this.registerSuccess = true;
    this.isLoggedIn=true;
    this.registeredUser = data['username'];
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.registerFail = false;
    this.router.navigate(['/']);
    
  }
}

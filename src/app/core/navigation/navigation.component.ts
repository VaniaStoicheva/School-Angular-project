import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/user/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public username:string
  get currentUser(){
    return this.userService.currentUser;
  }
  get isLogged(){
    return this.authService.isLoggedIn;
  }

  constructor(
    private authService:AuthenticationService,
    private userService:UserService,
    private router:Router,
    
    ) { 
     
    }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logout(){
    this.authService.logout()
    .subscribe(data => {
      localStorage.clear();
      this.router.navigate(['/login']);
    })
  }
}

import { Component } from '@angular/core';
import { AuthenticationService } from './user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username:string;

  get isReady():boolean{
   return this.authService.currentUser!==undefined;
  }

  get isLogged(){
    return this.authService.isLogged();
  }

  constructor(private authService : AuthenticationService) { 
    this.username = localStorage.getItem('username');
   
  }

}

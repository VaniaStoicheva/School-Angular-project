import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) { }

  ngOnInit() {
    this.authService.logout()
      .subscribe(data => {
        localStorage.clear();
        this.router.navigate(['/login']);
      })
  }
}
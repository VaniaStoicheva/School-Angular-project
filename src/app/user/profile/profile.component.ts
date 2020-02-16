import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/validators/directives/password-match';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css','../../../error-styles.scss']
})
export class ProfileComponent implements OnInit {

  form:FormGroup;

  get currentUser(){
    return this.userService.currentUser;
  }
  constructor(
    private userService:UserService,
    private router:Router,
    private fb:FormBuilder) 
    {
      this.form=this.fb.group({
        email:['',[Validators.pattern(new RegExp('[A-Z0-9a-z._%+-`]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')),Validators.required]],
        passwords:this.fb.group({
          password:['',[Validators.required]],
          rePassword:['',[Validators.required]]
        },{
          validators:[passwordMatch]
        })
      })
     }

  ngOnInit() {
  }
  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }
}

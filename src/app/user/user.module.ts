import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {UserRoutingModule} from './user/user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [UserComponent,  ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
